<template>
	<main class="main">
		<div class="container">
			<section class="about">
				<h1 class="title">О компании / Партнерам</h1>
				<div class="about__text">
					<p class="about__par">
						Добро пожаловать в DeliveryFood, ведущую компанию по доставке еды из ресторанов,
						которая работает на рынке уже более трёх лет.
						Наша миссия заключается в том, чтобы объединить любителей вкусной еды,
						предоставляя им удобный и быстрый способ заказа любимых блюд из лучших ресторанов в вашем городе.
					</p>
					<p class="about__par">
						Delivery Food предлагает широкий ассортимент кулинарных изысков от различных ресторанов,
						включая традиционные блюда мировой кухни, национальные деликатесы и современные гастрономические шедевры.
						Мы гордимся нашим разнообразием и качеством, которые мы обеспечиваем, работая с лучшими поставщиками и кулинарами.
					</p>
					<p class="about__par">
						С момента основания компании в 2021 году, мы стремились создать уникальную платформу для доставки еды,
						которая бы сочетала удобство и высокое качество.
						Наша концепция объединяет современные технологии и инновационные решения,
						чтобы каждый заказ был выполнен с максимальной точностью и своевременностью.
					</p>
					<p class="about__par">
						Сегодня вы можете заказать доставку еды от Delivery Food в 7 городах России.
						Мы постоянно расширяем нашу сеть, чтобы обеспечить наших клиентов доступом к широкому ассортименту вкусных блюд из различных ресторанов.
					</p>
					<ul class="about__list">Некоторые из наших ключевых преимуществ:
						<li>Широкий выбор ресторанов и блюд</li>
						<li>Быстрая и надежная доставка</li>
						<li>Удобный интерфейс для заказа</li>
						<li>Высокое качество обслуживания</li>
						<li>Доступные цены</li>
					</ul>
					<!--TODO ссылку с поддержкой-->
					<p class="about__par">
						Если вы хотите получить дополнительную информацию или узнать о специальных предложениях, пожалуйста,
						посетите наш сайт или <span><a href="#" class="about__support--link">свяжитесь</a></span> с нашей службой поддержки клиентов.
						Мы всегда рады помочь вам с выбором и заказом ваших любимых блюд.
					</p>
				</div>
				<div class="about__address">
					<p>
						ООО "ДЕЛИВЕРИ ФУД" (ИНН 6809257710)
						Юридический адрес: 393053, Воронежская обл., Воронеж г., Московский пр., дом № 128 
					</p>
				</div>
			</section>
		</div>
	</main>
</template>

<style lang="scss">
.about
{
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.about__text,
	.about__address {
		font-size: 1.5rem;
		color: $gray-text-color;
	}

	.about__text {
		gap: 2rem;

		padding: 3rem 5rem 3rem;

		border-top: 1px solid $gray-bg-color;
		border-bottom: 1px solid $gray-bg-color;
	}

	.about__address {
		padding-bottom: 2rem;
		text-align: center;
	}

	.about__list {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		margin: 1rem 0;

	}
	.about__list > li {
		margin-left: 1.2rem;
		
		list-style-type: disc;
	}
	.about__par {
			margin-bottom: 1rem;
			.about__support--link {
				color: $black-color;
				text-decoration: none;
		}

		.about__support--link:hover {
			text-decoration: underline;
		}
	}
}
</style>
