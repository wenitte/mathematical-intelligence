# 

Source: https://proofwiki.org/wiki/Montel%27s_Theorem


This article needs to be linked to other articles.In particular: Many prerequisites are missing. Importantly, the correct notions of (local) uniform boundedness and the corresponding version of the Arzelà-Ascoli-Theorem.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $U \subseteq \C$ be an open subset of the complex numbers.
Let $\map \HH U$ be the space of holomorphic mappings on $U$.

Then a family of mappings $\FF \subseteq \map \HH U$ is normal if and only if $\FF$ is locally bounded.


Proof
Normal implies locally bounded
By the Arzelà-Ascoli Theorem, every normal family is locally bounded.


Locally bounded implies normal
By the Arzelà-Ascoli Theorem, any locally bounded and locally uniformly equicontinuous family is normal. 
Hence it suffices to show that $\FF$ is locally uniformly equicontinuous.
As a Family of Lipschitz Continuous Functions with same Lipschitz Constant is Uniformly Equicontinuous, it suffices to show that every point $z_0 \in U$ has a neighbourhood $N$ such that all functions from $\FF$ have the same Lipschitz constant on $N$.
To this end, take any $z_0 \in U$.
By the assumption that $\FF$ is locally bounded, we may choose $R > 0$ such that for all $z \in B := \map B {x; R}$ (the closed disk of radius $R$ around $x$), we have $\size {\map f z} < M$.
Now take any $r \in \tuple {0, R}$ and let $B' = \map B {x; r}$. 
We then have for any $z, z' \in B'$ and $w \in B$:

$\size {\paren {w - z} \paren {w - z'} } \ge \paren {R - r}^2$
This allows us to derive:














\(\ds \size {\map f z - \map f {z'} }\)

\(=\)







\(\ds \size {\frac 1 {2 \pi i} \oint_{\partial B} \frac {\map f w} {w - z} \rd w - \frac 1 {2 \pi i} \oint_{\partial B} \frac {\map f w} {w - z'} \rd w}\)





Cauchy's Integral Formula














\(\ds \)

\(=\)







\(\ds \size {\frac 1 {2 \pi i} \oint_{\partial B} \paren {\frac {\map f w} {w - z} - \frac {\map f w} {w - z'} } \rd w}\)





Linear Combination of Contour Integrals














\(\ds \)

\(=\)







\(\ds \size {\frac 1 {2 \pi i} \oint_{\partial B} \frac {\map f w \paren {w - z'} - \map f w \paren {w - z} } {\paren {w - z} \paren {w - z'} } \rd w}\)




















\(\ds \)

\(=\)







\(\ds \size {\frac {\paren {z - z'} }{2 \pi i} \oint_{\partial B} \frac {\map f w} {\paren {w - z} \paren {w - z'} } \rd w}\)




















\(\ds \)

\(\le\)







\(\ds \size {\frac 1 {2 \pi} } \size {z - z'} 2 \pi \frac M {\paren {R - r}^2}\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \frac M {\paren {R - r}^2} \size {z - z'}\)









Therefore, $M \paren {R - r}^{-2}$ is a Lipschitz constant for all functions in $\FF$ on $B'$. 
$\blacksquare$


Source of Name
This entry was named for Paul Antoine Aristide Montel.


Sources
1978: John B. Conway: Functions of One Complex Variable (2nd ed.): $\S 7.2$




