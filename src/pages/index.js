import React from "react";
import theme from "theme";
import { Theme, Link, Em, Span, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section, Menu } from "@quarkly/components";
import { GiArmoredBoomerang } from "react-icons/gi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/607c431b7c7120001f1ee5d0/images/download.jpg?v=2021-04-18T17:22:36.152Z) center"
			padding="100px 0 200px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Override slot="SectionContent" />
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						as="h1"
						font="normal 900 72px/1.2 --fontFamily-googleAcme"
						md-font="--headline2"
						margin="10px 0"
						border-color="#ffffff"
						color="#00ffe3"
					>
						<Span
							font-weight="normal"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Em>
								GAMES BY NAMES
							</Em>
						</Span>
					</Text>
					<Text text-align="left" font="300 16px/24px --fontFamily-googleGloriaHallelujah">
						<Em>
							Welcome Amigos, to the new Gaming World.
							<br />
							Here We or You or Any other Person can get multiple games for free.
							<br />
							Help us make this Gaming World Better and Larger.
							<br />
							Here We Buy, We Sell , So That You Buy Without Any Shitty Money Hell.
						</Em>
					</Text>
				</StackItem>
			</Stack>
			<Text
				color="--lightD2"
				letter-spacing="1px"
				text-transform="uppercase"
				margin="0"
				position="relative"
				padding="300px 0px 0px 550px"
			>
				success is a piece of cake,
				<br />
				dont run Behind it,
				<br />
				Excellence is a triple layer cake,
				<br />
				make your path to it
				<br />
				then success will run behind you.          - Aamir khan(Indian actor)
			</Text>
		</Section>
		<Icon
			category="gi"
			icon={GiArmoredBoomerang}
			color="#0d39fd"
			size="36px"
			font="36px --fontFamily-googleRockSalt"
			padding="0px 0px 0px 10px"
			position="fixed"
			bottom="auto"
			height="71px"
			left="0px"
			right="auto"
			top="0px"
			width="66px"
		/>
		<Box
			padding="12px 0"
			justify-content="space-between"
			align-items="center"
			flex-direction="row"
			md-flex-direction="column"
			position="absolute"
			top="0px"
			bottom="auto"
			height="48px"
			left="auto"
			right="529px"
			width="96.6406px"
			color="#282828"
		>
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override
					slot="link"
					text-decoration="none"
					color="--dark"
					padding="6px 12px"
					font="700 16px/24px --fontFamily-googlePermanentMarker"
					text-transform="uppercase"
				/>
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
				<Override slot="link-index">
					<Span font-weight="normal">
						<Em color="#ffec00">
							Home
						</Em>
					</Span>
				</Override>
			</Menu>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});