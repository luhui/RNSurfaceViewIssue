package com.surfaceviewissue;

import android.annotation.TargetApi;
import android.os.Build;
import android.view.SurfaceView;
import android.view.View;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by mluhui on 2017/7/3.
 */

public class SurfaceViewManager extends SimpleViewManager<View> {
    @Override
    public String getName() {
        return "SurfaceView";
    }

    @Override
    protected View createViewInstance(ThemedReactContext reactContext) {
        return new HMSurfaceView(reactContext);
//        View view = new View(reactContext);
//        view.setBackgroundColor(reactContext.getResources().getColor(android.R.color.holo_blue_bright));
//        return view;
    }
}
