# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Normal_Distribution/Lemma_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Lemma for Characteristic Function of Normal Distribution
$\ds \lim_{\alpha \mathop \to \infty} \int_{\frac{-\alpha - \mu} {\sqrt 2 \sigma} - i \frac {t \sigma} {\sqrt 2} }^{\frac {\alpha - \mu} {\sqrt 2 \sigma} - i \frac {t \sigma} {\sqrt 2} } e^{-z^2} \rd z = \sqrt {2 \pi \sigma^2}$


Proof
Let $\Gamma \subset \C$ be the rectangular contour with corners:














\(\ds c_1\)

\(=\)







\(\ds \frac {-\alpha - \mu} {\sqrt 2 \sigma} - i \frac {t \sigma} {\sqrt 2}\)




















\(\ds c_2\)

\(=\)







\(\ds \frac {\alpha - \mu} {\sqrt 2 \sigma} - i \frac {t \sigma} {\sqrt 2}\)




















\(\ds c_3\)

\(=\)







\(\ds \frac {\alpha - \mu} {\sqrt 2 \sigma}\)




















\(\ds c_4\)

\(=\)







\(\ds \frac {-\alpha - \mu} {\sqrt 2 \sigma}\)










Since $e^{-z^2}$ is holomorphic everywhere in the region bounded by $\Gamma$, the Cauchy Integral Theorem states that:














\(\ds \oint_{z \mathop \in \Gamma} e^{-z^2} \rd z\)

\(=\)







\(\ds \int_{c_1}^{c_2} e^{-z^2} \rd z + \int_{c_2}^{c_3} e^{-z^2} \rd z + \int_{c_3}^{c_4} e^{-z^2} \rd z + \int_{c_4}^{c_1} e^{-z^2} \rd z\)




















\(\ds \)

\(=\)







\(\ds 0\)









We now evaluate each linear contour integral in the limit as $\alpha$ goes to infinity:


Between $c_3$ and $c_4$













\(\ds \lim_{\alpha \mathop \to \infty} \int_{c_3}^{c_4} e^{-z^2} \rd z\)

\(=\)







\(\ds \lim_{\alpha \mathop \to \infty} \int_{\frac {\alpha - \mu} {\sqrt 2 \sigma} }^{\frac {-\alpha - \mu} {\sqrt 2 \sigma} } e^{-z^2} \rd z\)




















\(\ds \)

\(=\)







\(\ds -\lim_{\alpha \mathop \to \infty} \int_{\frac {-\alpha - \mu} {\sqrt 2 \sigma} }^{\frac {\alpha - \mu} {\sqrt 2 \sigma} } e^{ -z^2 } \rd z\)




















\(\ds \)

\(=\)







\(\ds -\sqrt {2 \pi \sigma^2}\)





Integral of Normal Distribution





Between $c_2$ and $c_3$













\(\ds \norm {\lim_{\alpha \rightarrow \infty} \int_{c_2}^{c_3} e^{-z^2} \rd z}\)

\(=\)







\(\ds \norm {\lim_{\alpha \rightarrow \infty} \int_{c_2}^{c_3} e^{-z^2} \rd z}\)




















\(\ds \)

\(\le\)







\(\ds \lim_{\alpha \rightarrow \infty} \int_{c_2}^{c_3} \norm {e^{-z^2} } \rd z\)




















\(\ds \)

\(\le\)







\(\ds \lim_{\alpha \rightarrow \infty} \int_{c_2}^{c_3} \max_{z \mathop \in \closedint {c_2} {c_3} } \norm {e^{-z^2} } \rd z\)




















\(\ds \)

\(\le\)







\(\ds \lim_{\alpha \rightarrow \infty} \int_{c_2}^{c_3} \norm {e^{-\paren {\frac {\alpha - \mu} {\sqrt 2 \sigma} }^2} } \rd z\)




















\(\ds \)

\(\le\)







\(\ds \lim_{\alpha \rightarrow \infty} \norm {e^{-\paren {\frac {\alpha - \mu} {\sqrt 2 \sigma} }^2} } \int_{c_2}^{c_3} \rd z\)




















\(\ds \)

\(=\)







\(\ds 0\)











Between $c_4$ and $c_1$
By a similar argument as for between $c_2$ and $c_3$, the integral between $c_4$ and $c_1$ is also $0$.


Between $c_1$ and $c_2$













\(\ds \oint_{z \mathop \in \Gamma} e^{-z^2} \rd z\)

\(=\)







\(\ds \int_{c_1}^{c_2} e^{-z^2} \rd z + \int_{c_2}^{c_3} e^{-z^2} \rd z + \int_{c_3}^{c_4} e^{-z^2} \rd z + \int_{c_4}^{c_1} e^{-z^2} \rd z\)




















\(\ds \)

\(=\)







\(\ds \int_{c_1}^{c_2} e^{-z^2} \rd z + 0 - \sqrt {2 \pi \sigma^2} + 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









and therefore:














\(\ds \int_{c_1}^{c_2} e^{-z^2} \rd z\)

\(=\)







\(\ds \sqrt {2 \pi \sigma^2}\)









$\blacksquare$





