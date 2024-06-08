import { defineStore } from 'pinia';

interface Measurement {
  [key: string]: string | number;
  timestamp: string ;
}

export const useMeasurementStore = defineStore('measurements', {
  state: () => ({
    measurements: [] as Measurement[],
    railLength: 0,
    holePitch: 0,
    endPitch: 0,
    railWeight: 0,
    holeCount: 0,
    tolerance: 0,
  }),
  actions: {
    setMeasurements(newMeasurements: Measurement[]) {
      this.measurements = newMeasurements;
      localStorage.setItem('measurements', JSON.stringify(this.measurements));
    },
    addMeasurements(newMeasurements: Measurement[]) {
      this.measurements.push(...newMeasurements);
      localStorage.setItem('measurements', JSON.stringify(this.measurements));
    },
    setRailLength(length: number) {
      this.railLength = length;
    },
    setHolePitch(holePitch: number) {
      this.holePitch = holePitch;
    },
    setEndPitch(endPitch: number) {
      this.endPitch = endPitch;
    },
    setRailWeight(weight: number) {
      this.railWeight = weight;
    },
    setHoleCount(holes: number) {
      this.holeCount = holes;
    },
    setTolerance(tolerance: number) {
      this.tolerance = tolerance;
    },
    removeMeasurement(index: number) {
      this.measurements.splice(index, 1);
      localStorage.setItem('measurements', JSON.stringify(this.measurements));
    }
  },
  persist: true, // Ensure state is persistent
});
