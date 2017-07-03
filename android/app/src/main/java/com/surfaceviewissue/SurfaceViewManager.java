package com.surfaceviewissue;

import android.view.SurfaceView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by mluhui on 2017/7/3.
 */

public class SurfaceViewManager extends SimpleViewManager<SurfaceView> {
    @Override
    public String getName() {
        return "SurfaceView";
    }

    @Override
    protected SurfaceView createViewInstance(ThemedReactContext reactContext) {
        return new SurfaceView(reactContext);
    }
}
