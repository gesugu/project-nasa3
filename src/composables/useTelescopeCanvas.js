import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const useTelescopeCanvas = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio); // Настраиваем под устройства с высоким разрешением
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  // Создание полупрозрачной сферы для затемнения фона
  const backgroundSphereGeometry = new THREE.SphereGeometry(100, 64, 64);
  const backgroundSphereMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
  const backgroundSphere = new THREE.Mesh(backgroundSphereGeometry, backgroundSphereMaterial);
  backgroundSphere.position.set(0, 0, -5);
  backgroundSphere.material.side = THREE.BackSide;
  scene.add(backgroundSphere);

  scene.background = null; // Убирает фон сцены

  let model; // Переменная для хранения загруженной модели

  // Загрузка GLTF модели с локального пути
  const loader = new GLTFLoader();
  loader.load(
      './src/images/james webb model2.glb',
      (gltf) => {
          model = gltf.scene;
          model.scale.set(2, 2, 2); // Изменяем размер модели
          scene.add(model);
      },
      (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
          console.error('An error occurred loading the model', error);
      }
  );
  
  // Убираем окружающий свет, чтобы задняя часть оставалась затемнённой
  // Освещение сцены
  
  // Направленный свет для передней части модели с тёплым розовым цветом
  const pinkDirectionalLight = new THREE.DirectionalLight(0xffc0cb, 4); // цвет: тёплый розовый, интенсивность: 2
  pinkDirectionalLight.position.set(0, -5, 5); // позиция источника света ниже модели, направлена вперёд
  scene.add(pinkDirectionalLight);
  
  // Направленный свет для верхней части модели со светло-жёлтым цветом
  const yellowDirectionalLight = new THREE.DirectionalLight(0xffedc0, 5); // цвет: светло-жёлтый, интенсивность: 1.5
  yellowDirectionalLight.position.set(0, 15, 15); // позиция источника света выше модели, направлена вперёд
  scene.add(yellowDirectionalLight);
  
  // Точечный свет, направленный на переднюю часть модели
  const spotLight = new THREE.SpotLight(0xffffff, 1.5);
  spotLight.position.set(0, 0, 10); // позиция света спереди
  spotLight.angle = Math.PI / 4; // угол освещения
  spotLight.penumbra = 0.5; // мягкость краёв света
  spotLight.castShadow = true;
  scene.add(spotLight);
  
  // Устанавливаем позицию камеры
  camera.position.z = 8;
  
  // Обработка события изменения размера окна
  const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Обновляем размеры рендера
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio); // Учет плотности пикселей на экранах высокого разрешения

      // Обновляем соотношение сторон камеры и пересчитываем проекционную матрицу
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  }

  // Переменные для отслеживания состояния мыши
  let isMouseDown = false;
  let previousMousePosition = { x: 0, y: 0 };

  // Обработчики событий мыши
  const onMouseDown = (event) => {
      isMouseDown = true;
      previousMousePosition = { x: event.offsetX, y: event.offsetY }; // Инициализируем позицию
  }

  const onMouseUp = () => {
    isMouseDown = false;
  }
  
  const onMouseMove = (event) => {
      if (!isMouseDown) return;
    
      const deltaMove = {
          x: event.offsetX - previousMousePosition.x,
          y: event.offsetY - previousMousePosition.y
      };

      scene.rotation.y += deltaMove.x * 0.01; // Вращаем сцену по оси Y
      scene.rotation.x += deltaMove.y * 0.01; // Вращаем сцену по оси X

      previousMousePosition = {
          x: event.offsetX,
          y: event.offsetY
      };
  }

  // Добавляем обработчик для плавного приближения и отдаления
  let targetZoom = camera.position.z; // целевая позиция камеры
  const zoomSpeed = 0.1; // скорость зума

  const onWheel = (event) => {
      const deltaZoom = event.deltaY * 0.01; // уменьшенное изменение масштаба для плавности
      targetZoom += deltaZoom;
    
      // Ограничение зума
      targetZoom = Math.min(Math.max(targetZoom, 3), 15); // от 5 до 10
  }

  // Функция анимации
  function animate() {
      requestAnimationFrame(animate);
  
      // Плавное приближение или отдаление камеры
      camera.position.z += (targetZoom - camera.position.z) * zoomSpeed;
  
      // Вращение модели, если она загружена
      if (model) {
          model.rotation.y += 0.001; // Вращение по оси Y
      }
  
      renderer.render(scene, camera);
  }
  
  // Запускаем анимацию
  animate();

  return {
    renderer,
    onResize,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onWheel
  }
}