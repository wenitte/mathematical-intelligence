# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Exponential_of_-t%5E2/Proof_1

Theorem
$\ds \int_0^\infty \map \exp {-t^2} \rd t = \dfrac {\sqrt \pi} 2$


Proof
Let $\ds I = \int_0^\infty \map \exp {-t^2} \rd t$.
Let $\ds I_P = \int_0^P \map \exp {-x^2} \rd x = \int_0^P \map \exp {-y^2} \rd y$.
Then we have:

$I = \ds \lim_{P \mathop \to \infty} I_P$
Hence:














\(\ds {I_P}^2\)

\(=\)







\(\ds \paren {\int_0^P \map \exp {-x^2} \rd x} \paren {\int_0^P \map \exp {-y^2} \rd y}\)




















\(\ds \)

\(=\)







\(\ds \int_0^P \int_0^P \map \exp {-\paren {x^2 + y^2} } \rd x \rd y\)




















\(\ds \)

\(=\)







\(\ds \iint_{\mathscr R_P} \map \exp {-\paren {x^2 + y^2} } \rd x \rd y\)










where $\mathscr R_P$ is the square $\Box OACE$ in the figure below:




Because the integrand is positive:




\(\text {(1)}: \quad\)









\(\ds \iint_{\mathscr R_1} \map \exp {-\paren {x^2 + y^2} } \rd x \rd y\)

\(\le\)







\(\ds {I_P}^2\)




















\(\ds \)

\(\le\)







\(\ds \iint_{\mathscr R_2} \map \exp {-\paren {x^2 + y^2} } \rd x \rd y\)









where $\mathscr R_1$ and $\mathscr R_2$ are the regions in the first quadrant bounded by the circles with centers $O$ and radii $P$ and $P \sqrt 2$ respectively.

Using polar coordinates, we can express $(1)$ as:




\(\text {(1)}: \quad\)









\(\ds \int_{\theta \mathop = 0}^{\frac \pi 2} \int_{r \mathop = 0}^P \map \exp {-r^2} r \rd r \rd \theta\)

\(\le\)







\(\ds {I_P}^2\)




















\(\ds \)

\(\le\)







\(\ds \int_{\theta \mathop = 0}^{\frac \pi 2} \int_{r \mathop = 0}^{P \sqrt 2} \map \exp {-r^2} r \rd r \rd \theta\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac \pi 4 \paren {1 - \map \exp {-P^2} }\)

\(\le\)







\(\ds {I_P}^2\)




















\(\ds \)

\(\le\)







\(\ds \dfrac \pi 4 \paren {1 - \map \exp {-2 P^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{P \mathop \to \infty} {I_P}^2\)

\(=\)







\(\ds I^2\)




















\(\ds \)

\(=\)







\(\ds \dfrac \pi 4\)














\(\ds \leadsto \ \ \)





\(\ds I\)

\(=\)







\(\ds \dfrac {\sqrt \pi} 2\)









$\blacksquare$





