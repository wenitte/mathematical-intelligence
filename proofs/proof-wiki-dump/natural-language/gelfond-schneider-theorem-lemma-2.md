# 

Source: https://proofwiki.org/wiki/Gelfond-Schneider_Theorem/Lemma_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma
Let $\map f z$ be an analytic function in the open disk $D \subseteq \C: D = \set {z : \size z < R}$ for some real number $R > 0$.
Let $f$ also be continuous on the closure of $D$, that is, on $D^- = \set {z : \size z \le R}$.

Then:

$\forall z \in D^-: \size {\map f z} \le \size f_R$
where we set:

$\ds \size f_R = \max_{\size z \mathop = R} \size {\map f z}$

This lemma is essentially a restatement of the Maximum Modulus Principle for analytic functions.


Proof
Since $D^-$ is compact, the continuous function $\size f$ has a maximum point $z_0 \in D^-$, meaning that $\size {\map f {z_0} } = \max_{D^-} \size f$.
If $z_0$ belongs to the open disk $D$, then the Maximum Modulus Principle implies that $f$ is constant, in which case the statement is trivial.
If instead $z_0$ belongs to the boundary $D^- \setminus D$, then $\size {z_0} = R$ and so $\size {\map f {z_0} } \le \size f_R$.
Since $\size {\map f z} \le \size {\map f {z_0} }$ for any $z \in D^-$, the statement follows.
$\blacksquare$





