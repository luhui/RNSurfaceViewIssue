package com.surfaceviewissue;

import android.annotation.TargetApi;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Rect;
import android.hardware.Camera;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CameraManager;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.support.annotation.IntDef;
import android.support.annotation.NonNull;
import android.util.Log;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


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
            public boolean mIsStart;
            public Camera mCamera;

            @Override
            public void surfaceCreated(SurfaceHolder holder) {
                try {
                    mCamera = Camera.open();
                    mCamera.setPreviewDisplay(holder);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
                if (!mIsStart) {
                    mIsStart = true;
                    Camera.Parameters p = mCamera.getParameters();
                    p.setPreviewSize(width, height);
//                    mCamera.setParameters(p);
                    mCamera.startPreview();
                }
            }

            @Override
            public void surfaceDestroyed(SurfaceHolder holder) {
                mCamera.stopPreview();
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
