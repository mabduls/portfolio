<script setup>
defineProps({ kind: { type: String, required: true } })
</script>

<template>
  <svg viewBox="0 0 160 104" fill="none" aria-hidden="true">
    <template v-if="kind === 'aircraft'">
      <path
        d="M10 84C40 84 32 26 74 34S115 60 150 16"
        stroke="var(--control-border)"
        stroke-width="2"
        stroke-dasharray="4 5"
      />
      <circle cx="10" cy="84" r="4" fill="var(--muted)" />
      <circle cx="150" cy="16" r="4" fill="var(--muted)" />
      <circle cx="83" cy="39" r="24" fill="var(--accent-soft)" />
      <path d="m70 41 10-4 4-12 4 1-1 12 12 5-1 4-13-2-4 8-3-1 1-9-8 2z" fill="var(--accent)" />
    </template>
    <template v-else-if="kind === 'border'">
      <path d="M80 9v86M14 53h132" stroke="var(--border)" stroke-width="2" stroke-dasharray="4 5" />
      <rect
        x="10"
        y="16"
        width="49"
        height="28"
        rx="6"
        fill="var(--surface)"
        stroke="var(--control-border)"
      />
      <path
        d="m22 26 14-4 5 13-14 4zM41 27l7-3v11l-7-3"
        stroke="var(--muted)"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <circle cx="126" cy="30" r="15" fill="var(--accent-soft)" />
      <path d="m117 31 6-2 3-8 3 1-1 8 8 4-1 3-9-2-3 5-2-1 1-6-4 1z" fill="var(--accent)" />
      <path
        d="M23 71h22M26 79h16M30 87h8"
        stroke="var(--muted)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <rect
        x="100"
        y="63"
        width="47"
        height="29"
        rx="6"
        fill="var(--surface)"
        stroke="var(--control-border)"
      />
      <path d="M112 77h7l4-6 4 13 3-7h7" stroke="var(--accent)" stroke-width="2" />
    </template>
    <template v-else-if="kind === 'reinsurance'">
      <rect
        x="15"
        y="24"
        width="47"
        height="65"
        rx="6"
        fill="var(--surface)"
        stroke="var(--control-border)"
      />
      <rect
        x="24"
        y="15"
        width="47"
        height="65"
        rx="6"
        fill="var(--surface)"
        stroke="var(--control-border)"
      />
      <path
        d="M36 32h23M36 42h23M36 52h14"
        stroke="var(--control-border)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M82 51h20m-6-6 6 6-6 6"
        stroke="var(--muted)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="129" cy="51" r="23" fill="var(--accent-soft)" />
      <path
        d="m119 51 7 7 13-15"
        stroke="var(--accent)"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
    <template v-else>
      <path d="M40 29h40v45h41M40 74h40M80 29h41" stroke="var(--control-border)" stroke-width="2" />
      <rect
        x="10"
        y="16"
        width="31"
        height="27"
        rx="5"
        fill="var(--surface)"
        stroke="var(--control-border)"
      />
      <path d="M17 25h17M17 33h11" stroke="var(--muted)" stroke-width="2" />
      <rect
        x="10"
        y="61"
        width="31"
        height="27"
        rx="5"
        fill="var(--surface)"
        stroke="var(--control-border)"
      />
      <path d="M17 70h17M17 78h11" stroke="var(--muted)" stroke-width="2" />
      <circle cx="80" cy="52" r="16" fill="var(--accent-soft)" />
      <path d="M74 52h12M80 46v12" stroke="var(--accent)" stroke-width="2" />
      <rect x="120" y="16" width="31" height="27" rx="5" fill="var(--accent-soft)" />
      <path d="m128 30 5 5 10-11" stroke="var(--accent)" stroke-width="2" />
      <rect
        x="120"
        y="61"
        width="31"
        height="27"
        rx="5"
        fill="var(--surface)"
        stroke="var(--control-border)"
      />
      <path d="M128 80v-8M135 80V68M142 80V72" stroke="var(--muted)" stroke-width="2" />
    </template>
  </svg>
</template>
