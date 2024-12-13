# 

Source: https://proofwiki.org/wiki/Projective_Resolution_Exists_Iff_Enough_Projectives


It has been suggested that this page be renamed.In particular: Projective Resolution Exists iff Enough ProjectivesTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\AA$ be an abelian category.

Then $\AA$ has enough projectives if and only if any object in $\AA$ has a projective resolution.


Proof
Suppose $\AA$ has enough projectives.
Let $X$ be an object in $\AA$.
Then there is an epimorphism $\varepsilon : P_0 \to X$ for some projective object $P_0$.
In particular

$P_0 \to X \to 0$
is exact at $X$.
Since $\AA$ is abelian it has kernels.
Thus $\varepsilon$ has a kernel $K \to P_0$.
Since $\AA$ has enough projectives, there is an epimorphism $\tilde d_1 : P_1 \to K$.
Define $d_1 : P_1 \to K \to P_0$ by composition.
By Uniqueness of Epi-Mono Factorization and since this is an epi-mono factorization of $d_1$, $K$ is the image of $d_1$.
Hence

$P_1 \to P_0 \to X \to 0$
is exact at $P_0$.
By induction there is a projective resolution of $X$.
Conversely suppose, that any object $X$ admits a projective resolution.
Then the augmentation map $\varepsilon: P_0 \to X$ is an epimorphism by a projective object $P_0$.
Hence $\AA$ has enough projectives.
$\blacksquare$





