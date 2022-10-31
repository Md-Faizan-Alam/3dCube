/**
 * This module internally calls a setInterval and stops it after a fixed amount of time
 * and restarts it everytime the user moves the mouse.
 * @param {Function} ripple - The function that will be called repeatedly
 * @param {Milliseconds} timeout - The amount of time (in milliseonds) between two successive calls of the ripple function
 * @param {Integer} restTimeout - The period of inactivity (in milliseonds) after which repeated calling will stop
 */
export default function agitate(ripple, timeout = 25, restTimeout = 5000) {
    let refreshing = false;

    function refresh() {
        if (!refreshing) {
            // Refreshing Starts
            const intervalId = setInterval(ripple, timeout);
            refreshing = true;
            setTimeout(() => {
                // Refreshing Stops
                clearInterval(intervalId);
                refreshing = false;
            }, restTimeout);
        }
    }

    refresh();

    window.addEventListener("mousemove", refresh);
}
