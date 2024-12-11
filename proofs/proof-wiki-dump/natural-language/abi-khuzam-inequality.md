# 

Source: https://proofwiki.org/wiki/Abi-Khuzam_Inequality



Theorem
Let $\triangle ABC$ be a triangle.
Then:

$\sin A \cdot \sin B \cdot \sin C \le k A \cdot B \cdot C$
where:

$A, B, C$ are measured in radians
$k = \paren {\dfrac {3 \sqrt 3} {2 \pi} }^3 \approx 0 \cdotp 56559 \, 56245 \ldots$
Condition for Equality
$A=B=C$
Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
For $0 < \alpha_i < \pi, \alpha_1 + \alpha_2 + \alpha_3 = \pi$ we consider the function:

$\map F {\alpha_1, \alpha_2, \alpha_3} =  \dfrac {\sin \alpha_1 \sin \alpha_2 \sin \alpha_3} {\alpha_1 \alpha_2 \alpha_3}$
$F$ is defined on the region $G$ in the $\tuple {\alpha_1, \alpha_2, \alpha_3}$-space consisting of the points inside the triangle with the vertices:














\(\ds P_1\)

\(:=\)







\(\ds \tuple {\pi, 0, 0}\)




















\(\ds P_2\)

\(:=\)







\(\ds \tuple {0, \pi, 0}\)




















\(\ds P_3\)

\(:=\)







\(\ds \tuple {0, 0, \pi}\)









We define $F$ on the boundary of the triangle by:

$\map F {0, \alpha_2, \alpha_3} = \dfrac {\sin \alpha_2 \sin \alpha_3} {\alpha_2 \alpha_3}, \alpha_2 \neq 0, \alpha_3 \neq 0, \alpha_2 + \alpha_3 = \pi$
and analogously:

$\map F {\alpha_1, 0, \alpha_3}$ and $\map F{\alpha_1, \alpha_2, 0}$
furthermore:

$\map F {\pi, 0, 0} = \map F {0, \pi, 0} = \map F {0, 0, \pi} = 0$
$F$ is now defined on a closed region $\bar G$; it is continuous and differentiable on $\bar G$.
Moreover, as $0 \le F < 1$ there is (at least) one point in $\bar G$ where $F$ has its maximum value.
By the usual procedure, in view of $\alpha_1 + \alpha_2 + \alpha_3 = \pi$, a maximum satisfies:




\(\text {(6)}: \quad\)









\(\ds \frac {\partial F} {\partial \alpha_1}\)

\(=\)







\(\ds \frac {\partial F} {\partial \alpha_2}\)

\(\ds = \frac {\partial F} {\partial \alpha_3} \paren {= \lambda}\)







In $G$ we have:

$\ds \frac {\partial F} {\partial \alpha_1} = \frac {\sin \alpha_2 \sin \alpha_3} {\alpha_2 \alpha_3} \cdot \frac {\alpha_1 \cos \alpha_1 - \sin \alpha_1} {\alpha_1^2} = \map F {\cot \alpha_1 - \alpha_1^{-1} }$
and, as $F \ne 0$, $(6)$ implies:




\(\text {(7)}: \quad\)









\(\ds \cot \alpha_1 - \alpha_1^{-1}\)

\(=\)







\(\ds \cot \alpha_2 - \alpha_2^{-1}\)

\(\ds = \cot \alpha_3 - \alpha_3^{-1}\)







For $f = \cot \alpha - \alpha^{-1}$ we obtain:

$f' = -\sin^{-2} \alpha + \alpha^{-2} < 0$
$f$ is therefore a decreasing function of $\alpha$ (we have $0 > f > -\infty$)
hence $(7)$ implies

$\ds \alpha_1 = \alpha_2 = \alpha_3 (= \pi / 3)$
in this point we have $F = k$.
We must verify whether larger values appear on the boundary of $\bar G$.
Between $P_2$ and $P_3$ yields

$\ds F = \frac {\sin \alpha_2 \sin \alpha_3} {\alpha_2 \alpha_3}, \alpha_2 + \alpha_3 = \pi$
and by an argument analogous to the former, but now with two factors instead of three, it follows that for the maximum on $P_2 P_3$ we have $\alpha_2 = \alpha_3 = \pi / 2$ and $F = 4 / \pi^2$, that is less than $k$.
Hence $F \le k$ on $\bar G$, which concludes the proof.
$\blacksquare$


Source of Name
This entry was named for Faruk Fuad Abi-Khuzam.


Sources
1974: Faruk F. Abi-Khuzam: Proof of Yff's Conjecture on the Brocard Angle of a Triangle (Elem. Math. Vol. 29: pp. 141 – 142)
1976: O. Bottema: On Yff's inequality for the Brocard angle of a triangle (Elem. Math. Vol. 31: pp. 13 – 14)
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,56559 56245 \ldots$
1989: Faruk F. Abi-Khuzam and Artin B. Boghossian: Some Recent Geometric Inequalities (Amer. Math. Monthly Vol. 96: pp. 576 – 589)  www.jstor.org/stable/2325176
Weisstein, Eric W. "Abi-Khuzam Inequality." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/Abi-KhuzamInequality.html




