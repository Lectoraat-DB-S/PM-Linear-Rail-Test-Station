<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import ParameterInput from "components/ParameterInput.vue";
export default defineComponent({
  name: 'SettingsPage',
  components: {ParameterInput},
  setup () {
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
    const MqttHost = ref<string | null>(null) // Define type for ip as string or null

    const ipHint = computed(() => {
      return MqttHost.value && !ipRegex.test(MqttHost.value) ? 'Please enter a valid IP address' : ''
    })

    return {
      ipHint,
      tab: ref('mails'),
      isPwd: ref(true),
      ipRules: [
        (val: string) => (val && ipRegex.test(val)) || 'Please enter a valid IP address'
      ],
      MaxTolSteek: ref(0.3),
      MaxTolLengte: ref(0.3),
      MqttHost: ref('192.168.6.61'),
      MqttUsername: ref('zigbee'),
      MqttPassword: ref('zigbeemqtt'),
      DBHost: ref('0.0.0.0'),
      DBUsername: ref('username'),
      DBPassword: ref('test'),
    }
  }
})
</script>

<template>
    <q-card>
      <q-tabs
        v-model="tab"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="metingen" label="Metingen" />
        <q-tab name="mqtt" label="MQTT" />
        <q-tab name="database" label="Database" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="metingen">
          <div class="q-gutter-y-md column">
            <div class="text-subtitle1">Batch eigenschappen</div>
            <ParameterInput />
            <q-separator />
            <div class="text-subtitle1">Maximale tolerantie steek gaten</div>
            <q-input
              v-model.number="MaxTolSteek"
              type="number"
              filled
              style="max-width: 200px"
            />
            <div class="text-subtitle1">Maximale tolerantie lengte rails</div>
            <q-input
              v-model.number="MaxTolLengte"
              type="number"
              filled
              style="max-width: 200px"
            />
            <q-btn color="primary" text-color="black" label="Gegevens Opslaan" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="mqtt">
          <div class="q-gutter-y-md column">
            <div class="text-subtitle1">MQTT Gebruikersnaam</div>
            <q-input standout v-model="MqttUsername" />
            <div class="text-subtitle1">MQTT Wachtwoord</div>
            <q-input v-model="MqttPassword" filled :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div class="text-subtitle1">MQTT Host</div>
            <q-input
              ref="ipRef"
              filled
              v-model="MqttHost"
              label="IP Address *"
              :hint="ipHint"
              lazy-rules
              :rules="ipRules"
            />
            <q-btn color="primary" text-color="black" label="Gegevens Opslaan" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="database">
          <div class="q-gutter-y-md column">
            <div class="text-subtitle1">Database Gebruikersnaam</div>
            <q-input standout v-model="DBUsername" />
            <div class="text-subtitle1">Database Wachtwoord</div>
            <q-input v-model="DBPassword" filled :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div class="text-subtitle1">Database Host</div>
            <q-input
              ref="ipRef"
              filled
              v-model="DBHost"
              label="IP Address *"
              :hint="ipHint"
              lazy-rules
              :rules="ipRules"
            />
            <q-btn color="primary" text-color="black" label="Gegevens Opslaan" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
</template>
