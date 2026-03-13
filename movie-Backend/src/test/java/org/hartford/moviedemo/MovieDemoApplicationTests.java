package org.hartford.moviedemo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

class MovieDemoApplicationTests {

    @Test
    void mainMethodExists() {
        assertDoesNotThrow(() -> MovieDemoApplication.class.getDeclaredMethod("main", String[].class));
    }

}
