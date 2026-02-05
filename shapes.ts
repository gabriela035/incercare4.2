import { Shape } from './types.js';

export class Circle extends Shape {
    radius = 40;

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    isPointInside(px: number, py: number) {
        const dx = px - this.x;
        const dy = py - this.y;
        return Math.sqrt(dx * dx + dy * dy) < this.radius;
    }
}

export class Triangle extends Shape {
    size = 50;

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.size);
        ctx.lineTo(this.x - this.size, this.y + this.size);
        ctx.lineTo(this.x + this.size, this.y + this.size);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    isPointInside(px: number, py: number) {
        // Simple bounding box check
        return px > this.x - this.size && px < this.x + this.size &&
               py > this.y - this.size && py < this.y + this.size;
    }
}
