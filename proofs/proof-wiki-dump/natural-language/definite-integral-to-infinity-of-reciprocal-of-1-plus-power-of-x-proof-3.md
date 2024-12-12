# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_1_plus_Power_of_x/Proof_3

Theorem
$\ds \int_0^\infty \frac 1 {1 + x^n} \rd x = \frac \pi n \map \csc {\frac \pi n}$


Proof
Let:














\(\ds x\)

\(=\)







\(\ds \paren {\tan \theta}^{\frac 2 n}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \rd x\)

\(=\)







\(\ds \frac 2 n \paren {\tan \theta}^{\frac 2 n - 1} \sec^2 \theta \rd \theta\)





Derivative of Tangent Function, Derivative of Power, Chain Rule for Derivatives




We also have:














\(\ds \tan 0\)

\(=\)







\(\ds 0\)





Tangent of Zero














\(\ds \lim_{\theta \mathop \to \frac \pi 2} \map \tan {\theta}\)

\(\to\)







\(\ds \infty\)





Tangent of Right Angle



Then:














\(\ds \int_0^\infty \frac 1 {1 + x^n} \rd x\)

\(=\)







\(\ds \int_0^{\pi / 2} \frac 1 {1 + \paren {\paren {\tan \theta}^{\frac 2 n} }^n} \cdot \frac 2 n \paren {\tan \theta}^{\frac 2 n - 1} \sec^2 \theta \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \frac 1 {1 + \tan^2 \theta} \cdot \paren {\tan \theta}^{\frac 2 n - 1} \sec^2 \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \frac 1 {\sec^2 \theta} \cdot \paren {\tan \theta}^{\frac 2 n - 1} \sec^2 \theta \rd \theta\)





$\sec^2 \theta = 1 + \tan^2 \theta$














\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \paren {\tan \theta}^{\frac 2 n - 1} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \paren {\frac {\sin \theta} {\cos \theta} }^{\frac 2 n - 1} \rd \theta\)





Definition of Tangent Function














\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \paren {\sin \theta}^{\frac 2 n - 1} \paren {\cos \theta}^{1 - \frac 2 n} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \paren {\sin \theta}^{2 \paren {\frac 1 n} - 1} \paren {\cos \theta}^{2 \paren {1 - \frac 1 n} -1 } \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \map \Beta {\frac 1 n, 1 - \frac 1 n}\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \frac {\map \Gamma {\frac 1 n} \map \Gamma {1 - \frac 1 n} } {\map \Gamma {1 - \frac 1 n + \frac 1 n} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \dfrac \pi {\map \sin {\frac \pi n} }\)





Euler's Reflection Formula and $\map \Gamma 1 = 1$














\(\ds \)

\(=\)







\(\ds \frac \pi n \map \csc {\frac \pi n}\)





Definition of Cosecant



$\blacksquare$





