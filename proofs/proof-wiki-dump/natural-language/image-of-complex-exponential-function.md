# 

Source: https://proofwiki.org/wiki/Image_of_Complex_Exponential_Function



Theorem
The image of the complex exponential function is $\C \setminus \left\{ {0}\right\}$.


Proof
Let $z \in \C \setminus \left\{ {0}\right\}$.
Let $r = \cmod z$ be the modulus of $z$, and let $\theta = \arg \left({z}\right)$ be the argument of $z$.
Then $r>0$.
Let $\ln$ denote the real natural logarithm, and let $e$ denote the real exponential function.
Then:














\(\ds \exp \left({\ln r + i \theta}\right)\)

\(=\)







\(\ds e^{ \ln r } \left({\cos \theta + i \sin \theta }\right)\)





Definition of Complex Exponential Function














\(\ds \)

\(=\)







\(\ds r \left({\cos \theta + i \sin \theta }\right)\)





Exponential of Natural Logarithm














\(\ds \)

\(=\)







\(\ds z\)





Definition of Polar Form of Complex Number



Hence, $z \in \operatorname{Im} \left({\exp}\right)$.

Suppose instead that $z=0$.
Let $z_0 = r_0 \left({\cos \theta_0 + i \sin \theta_0 }\right) \in \C$.
From Exponential Tends to Zero and Infinity, it follows that $e^{ r_0 } \ne 0$.
As $\cmod {\cos \theta_0 + i \sin \theta_0} = 1$, it follows that $\cos \theta_0 + i \sin \theta_0 \ne 0$.
Then this equation has no solutions:

$0 = \exp z_0 = e^{ r_0 } \left({\cos \theta_0 + i \sin \theta_0 }\right)$
Hence, $\operatorname{Im} \left({\exp}\right) = \C \setminus \left\{ {0}\right\}$-
$\blacksquare$


Also see
Exponential of Real Number is Strictly Positive


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 1.5$




