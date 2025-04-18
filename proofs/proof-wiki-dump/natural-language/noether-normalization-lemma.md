# 

Source: https://proofwiki.org/wiki/Noether_Normalization_Lemma


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $k$ be a field.
Let $A$ be a non-trivial finitely generated $k$-algebra.


This article, or a section of it, needs explaining.In particular: the above link is for Definition:Non-Trivial Ring -- we need to define a Definition:Non-Trivial AlgebraYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then there exists $n \in \N$ and a finite injective morphism of $k$-algebra:

$k \sqbrk {x_1, \dotsc, x_n} \to A$

This definition needs to be completed.In particular: Instead of using Definition:Finite Ring Homomorphism, another page is to be generated defining the module-theory version.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding or completing the definition.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{DefinitionWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
Since $A$ is finitely generated, we prove this by induction on the number $m$ of generators as a $k$-algebra.


Basis for the induction
If $m = 0$, then $A = k$ and thus there is nothing to prove.


Induction step
Let $A$ be a $k$-algebra generated by the elements $y_1, \dotsc, y_m, y_{m + 1}$. 
If $y_1, \dotsc, y_m, y_{m + 1}$ are algebraically independent, then $A$ is isomorphic to $k \sqbrk {x_1, \dotsc, x_m, x_{m + 1} }$.
In this case the theorem is obvious, so assume that $y_{m + 1}$ depends algebraically on $y_1, \ldots, y_m$.
So there exists a polynomial $P \in k \sqbrk {x_1, \dotsc, x_m, X}$ such that $\map P {y_1, \dotsc, y_n, y_{n + 1} } = 0$ in $A$. 

Let $\mu \in \N^n$ and define:

$f_\mu: k \sqbrk {x_1, \dotsc, x_n, X} \to k \sqbrk {x_1, \dotsc, x_n, X}: x_i \mapsto x_i + X^{\mu_i}, X \mapsto X$
This is easily seen to be an isomorphism.


This article contains statements that are justified by handwavery.In particular: easily seenYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Next, we want to show that there exists $\mu \in \N^n$ such that $\map {f_\mu} P$ is a polynomial in $X$ with leading coefficient in $k$.
Let $e$ be the biggest natural number such that  $P$ involves $x_e$ non-trivially. 
If there is no such number, define $e$ to be $0$. 
We proceed by induction on $e$.
The case $e = 0$ is easy since we then have a polynomial $f \in k \sqbrk X$.
Thus $\mu = \tuple {0, \dotsc, 0}$ will suffice.
Suppose it holds for $e$ and suppose $P$ depends only on $x_1, \dotsc, x_e, x_{e + 1}$.
Then we can write $P$ as:

$\ds P = \sum_{i \mathop = 0}^l a_i x_{e + 1}^i$
where $a_i \in k \sqbrk {x_1, \dotsc, x_e, X}$ and $a_l \ne 0$.
Hence by the induction hypothesis, there exists a $\mu' \in \N^n $ such that $\map {f_{\mu'} } {a_l}$ has a leading coefficient in $k$.

Note that we can choose that $\mu'_l$ for $l > e$ since $\map {f_\mu} {a_i}$ is independent of these components. 
Hence we define $\mu$ as $\mu_i = \mu'_i$ for every $i \ne e + 1$.
Now observe that:

$\ds \map {f_\mu} P = \sum_{i \mathop = 0}^l \map {f_\mu} {a_i} \, \map {f_\mu} {x_{e + 1} }^i = \sum_{i \mathop = 0}^l \map {f_{\mu'} } {a_i} \paren {x_{e + 1} + X^{\mu_{e + 1} } }^i$
We have that $\map {f_{\mu'} } {a_l}$ has a leading coefficient in $k$.
Thus by choosing $\mu_{e + 1}$ big enough, $\map {f_\mu} P$ has a leading coefficient in $k$.

Consider now thus the elements $z_i = \map {f_\mu^{-1} } {y_i} \in A$. 
These elements still generate $A$ since $f_\mu$ is an isomorphism. 
On the other hand, we find that:














\(\ds \map {f_\mu} P \tuple {z_1, \dotsc, z_m,  z_{m + 1} }\)

\(=\)







\(\ds \map {f_\mu} P \tuple {\map {f_\mu^{-1} } {y_1}, \dotsc, \map {f_\mu^{-1} } {y_m}, \map {f_\mu^{-1} } {y_{m + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \map P {y_1, \dotsc, y_m, y_{m + 1} }\)




















\(\ds \)

\(=\)







\(\ds 0\)









By the induction hypothesis, we have the existence of:

$\alpha: k \sqbrk {x_1, \dotsc, x_n} \to A'$
where $A'$ is generated by $z_1, \dotsc, z_m$.

By extending this $\alpha$ to $A$ by the natural inclusion, we find that $\alpha$ is finite, since $z_i$ is integral by construction and $z_{m + 1}$ is integral over the others since it satisfies $\map {f_\mu} P$. 


This article, or a section of it, needs explaining.In particular: "integral over the others" -- what specifically are the "others"? The above sentence needs to be rewritten as a series of simple statements in standard $\mathsf{Pr} \infty \mathsf{fWiki}$ style.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence it is the wanted finite injective morphism.
$\blacksquare$


Source of Name
This entry was named for Emmy Noether.


Also see
Zariski's Lemma
Preimage of Maximal Ideal of Finitely Generated Algebra is Maximal




