# 

Source: https://proofwiki.org/wiki/Factors_of_Sum_of_Two_Even_Powers

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:

$x^{2 n} + y^{2 n} = \ds \prod_{k \mathop = 1}^n \paren {x^2 + 2 x y \cos \dfrac {\paren {2 k - 1} \pi} {2 n} + y^2}$


Proof
From Factorisation of $z^n + a$:

$z^{2 n} + y^{2 n} = \ds \prod_{k \mathop = 0}^{2 n - 1} \paren {x - \alpha_k y}$
where $\alpha_k$ are the complex $2n$th roots of negative unity:














\(\ds \alpha_k\)

\(=\)







\(\ds e^{i \paren {2 k + 1} \pi / {2 n} }\)





from Roots of Complex Number














\(\ds \)

\(=\)







\(\ds \map \cos {\dfrac {\paren {2 k + 1} \pi} {2 n} } + i \, \map \sin {\dfrac {\paren {2 k + 1} \pi} {2 n} }\)





$k \in \set {0, 1, 2, \ldots, 2 n - 1}$




Then we have that:

$U_{2 n} = \set {\tuple {\alpha_0, \alpha_{2 n - 1} }, \tuple {\alpha_1, \alpha_{2 n - 2} }, \ldots, \tuple {\alpha_k, \alpha_{2 n - k - 1} }, \ldots, \tuple {\alpha_{n - 1}, \alpha_n } }$
where $U_{2 n}$ denotes the complex $2n$th roots of negative unity:

$U_{2 n} = \set {z \in \C: z^{2 n} = -1}$

Taking the product, $p_k$, of the factors of $x^{2 n} + y^{2 n}$ in pairs:














\(\ds p_k\)

\(=\)







\(\ds \paren {x - \alpha_k y} \paren {x - \alpha_{2 n - k - 1} y}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - \alpha_k y} \paren {x - \overline {\alpha_k} y}\)





Complex Roots of Polynomial with Real Coefficients occur in Conjugate Pairs














\(\ds \)

\(=\)







\(\ds x^2 - x y \paren {\alpha_k + \overline {\alpha_k} } + \alpha_k y \overline {\alpha_k} y\)




















\(\ds \)

\(=\)







\(\ds x^2 - x y \paren {\alpha_k + \overline {\alpha_k} } + \cmod {\alpha_k}^2 y^2\)





Modulus in Terms of Conjugate














\(\ds \)

\(=\)







\(\ds x^2 - x y \paren {\alpha_k + \overline {\alpha_k} } + y^2\)





Modulus of Complex Root of Negative Unity equals 1














\(\ds \)

\(=\)







\(\ds x^2 - x y \paren {\cos \dfrac {\paren {2 k + 1} \pi} {2 n} + i \sin \dfrac {\paren {2 k + 1} \pi} {2 n} + \cos \dfrac {\paren {2 k + 1} \pi} {2 n} - i \sin \dfrac {\paren {2 k + 1} \pi} {2 n} } + y^2\)





Definition of $\alpha_k$














\(\ds \)

\(=\)







\(\ds x^2 - 2 x y \cos \dfrac {\paren {2 k + 1} \pi} {2 n} + y^2\)





simplification



However














\(\ds p_{n - k}\)

\(=\)







\(\ds x^2 - 2 x y \cos \dfrac {\paren {2 n - 2 k + 1} \pi} {2 n} + y^2\)




















\(\ds \)

\(=\)







\(\ds x^2 - 2 x y \cos \dfrac {\paren {-2 k + 1} \pi + 2 n \pi} {2 n} + y^2\)




















\(\ds \)

\(=\)







\(\ds x^2 + 2 x y \cos \dfrac {\paren {-2 k + 1} \pi} {2 n} + y^2\)





Cosine of Angle plus Straight Angle: $\map \cos {x + \pi} = -\cos x$














\(\ds \)

\(=\)







\(\ds x^2 + 2 x y \cos \dfrac {\paren {2 k - 1} \pi} {2 n} + y^2\)





Cosine Function is Even: $\map \cos {- x} = \cos x$



Consider the permutation:

$\sigma = \begin{pmatrix}
 1 & 2     & \cdots & k     & \cdots & n - 1 & n \\
 n & n - 1 & \cdots & n - k & \cdots & 2     & 1

\end{pmatrix}$
From Permutation of Indices of Product:

$\ds \prod_{\map R k} p_k = \prod_{\map R {\map \sigma k} } p_{\map \sigma k}$
Hence:














\(\ds x^{2 n} + y^{2 n}\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n p_k\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^n p_{n - k}\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {x^2 + 2 x y \cos \dfrac {\paren {2 k - 1} \pi} {2 n} + y^2}\)












This article needs proofreading.In particular: I believe this to be correct, but would welcome a sanity check.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 2$: Special Products and Factors: $2.23$




