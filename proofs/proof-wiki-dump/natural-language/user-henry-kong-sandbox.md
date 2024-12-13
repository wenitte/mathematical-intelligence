# 

Source: https://proofwiki.org/wiki/User:Henry_kong/Sandbox

From Weierstrass Form:

$\ds \frac 1 {\map \Gamma z} = z e^{\gamma z} \prod_{n \mathop = 1}^\infty \left[{\left({1 + \frac z n}\right] e^{-z / n} }\right)$
We can take the reciprocal of the both side and obtain:

$\ds \map \Gamma z = \frac {e^{-\gamma z}} z \prod_{n \mathop = 1}^\infty \frac{e^{\frac z n}}{1 + \frac z n}$
Take the derivative of both side:














\(\ds \Gamma' \left({z}\right)\)

\(=\)







\(\ds -\frac{e^{-\gamma z}(1 + \gamma z)}{z^2} \prod_{n \mathop = 1}^\infty \left[{\frac{ e^{ z/n } }{(1 + \frac z n)} }\right] + \frac{ e^{-\gamma z} } z \sum_{n \mathop = 1}^\infty \left[ \frac z {n(z+n)} \prod_{i \mathop = 1}^\infty \frac{ e^{z/i} }{(1 + \frac z i)} \right]\)





General Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\frac{e^{-\gamma z}(1+\gamma z)}{z^2} \map \Gamma z \frac z { e^{-\gamma z} } + \frac{ e^{-\gamma z} } z \sum_{n \mathop = 1}^\infty \left[{ \frac z {n(z+n)} \frac z { e^{-\gamma z} } \map \Gamma z}\right]\)





Simplify the product notation














\(\ds \)

\(=\)







\(\ds -\frac{1+\gamma z} z \map \Gamma z + \sum_{n \mathop = 1}^\infty \left[{ \frac{z \map \Gamma z}{n(z+n)} }\right]\)





Simplify whole expression



Divide both side by $\map \Gamma z$:














\(\ds \frac{\Gamma' \left({z}\right)} {\map \Gamma z}\)

\(=\)







\(\ds -\frac{1+\gamma z} z + \sum_{n \mathop = 1}^\infty \left[{ \frac z {n(z+n)} }\right]\)




















\(\ds \)

\(=\)







\(\ds -\gamma-\frac 1 z + \sum_{n \mathop = 1}^\infty \left[{ \frac 1 n - \frac 1 {z+n} }\right]\)




















\(\ds \)

\(=\)







\(\ds -\gamma+\sum_{n \mathop = 1}^\infty \left[{ \frac 1 n - \frac 1 {z+n-1} }\right]\)





Rearrage the series



$\blacksquare$





