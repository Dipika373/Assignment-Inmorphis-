Q1
/*<canvas id="rectCanvas" width="150" height="150" style="border:1px solid #ccc;"></canvas>

<script>
  const canvas = document.getElementById("rectCanvas");
  const ctx = canvas.getContext("2d");

  // Outer black rectangle
  ctx.fillStyle = "black";
  ctx.fillRect(10, 10, 120, 120);

  // Inner white rectangle
  ctx.fillStyle = "white";
  ctx.fillRect(30, 30, 80, 80);
</script>


Q2
//<canvas id="circleCanvas" width="150" height="150" style="border:1px solid #ccc;"></canvas>

<script>
  const canvas = document.getElementById("circleCanvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2 * Math.PI); // x, y, radius, startAngle, endAngle
  ctx.strokeStyle = "red";
  ctx.stroke();
  </script>



Q3
//<canvas id="overlapCanvas" width="150" height="150" style="border:1px solid #ccc;"></canvas>

<script>
  const canvas = document.getElementById("overlapCanvas");
  const ctx = canvas.getContext("2d");

  // Red opaque rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 80, 80);

  // Blue semi-transparent rectangle
  ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
  ctx.fillRect(50, 50, 80, 80);
</script>
