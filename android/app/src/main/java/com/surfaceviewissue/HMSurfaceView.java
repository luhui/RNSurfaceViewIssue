package com.surfaceviewissue;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Rect;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.SurfaceHolder;
import android.view.SurfaceView;


/**
 * Created by mluhui on 2017/7/3.
 */

public class HMSurfaceView extends SurfaceView {

    public HMSurfaceView(Context context) {
        super(context);
        initSurface();
    }

    private void initSurface() {
        SurfaceHolder surfaceHolder = getHolder();
        surfaceHolder.addCallback(new SurfaceHolder.Callback() {
            @Override
            public void surfaceCreated(SurfaceHolder holder) {

            }

            @Override
            public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
                drawBlue(new Rect(0, 0, width, height));
            }

            @Override
            public void surfaceDestroyed(SurfaceHolder holder) {

            }
        });
    }

    private void drawBlue(Rect react) {
        Canvas canvas = getHolder().lockCanvas(react);
        if (canvas != null) {
            canvas.drawColor(Color.BLUE);
            getHolder().unlockCanvasAndPost(canvas);
        }
    }
}
