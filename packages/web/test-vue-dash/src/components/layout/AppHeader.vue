<template>
	<VAppBar
		height="80"
		color="white"
		class="app-header flex-grow-0"
	>
		<RouterLink
			:aria-label="$t('components.layout.appHeader.logoBtn.label')"
			:to="$t('components.layout.appHeader.logoBtn.link')"
			:disabled="maintenance"
			exact
			class="app-logo-link"
		>
			<img
				:alt="$t('components.layout.appHeader.logoBtn.alt')"
				src="@/assets/logo.svg"
				class="d-block app-logo"
			>
		</RouterLink>

		<VLayout
			align-center
			class="app-header-title pr-1 py-2"
		>
			<VDivider
				vertical
				inset
			/>

			<slot name="title">
				<VToolbarTitle class="text-h6 ml-4 ml-1">
					{{ $t('components.layout.appHeader.title') }}
				</VToolbarTitle>
			</slot>
		</VLayout>

		<HeaderMenu v-if="!maintenance" />
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import HeaderMenu from './HeaderMenu.vue';

	declare const MAINTENANCE: string;

	/** The Header of the application */
	@Component({
		components: {
			HeaderMenu
		}
	})
	export default class AppHeader extends Vue {
		get maintenance(): boolean {
			return MAINTENANCE === 'true';
		}
	}
</script>

<style lang="scss" scoped>
	.app-header ::v-deep .v-toolbar__content {
		padding: 0;
	}

	.app-header-title {
		height: 100%;
	}

	.app-logo-link {
		height: 100%;
		display: flex;
		min-width: 155px;

		&:not([disabled]):hover {
			background: #eee;
		}

		&[disabled] {
			pointer-events: none;
		}
	}

	.app-logo {
		flex: 1;
	}
</style>
