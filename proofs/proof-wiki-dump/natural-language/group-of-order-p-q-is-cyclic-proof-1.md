# 

Source: https://proofwiki.org/wiki/Group_of_Order_p_q_is_Cyclic/Proof_1

Theorem
Let $p, q$ be primes such that $p < q$ and $p$ does not divide $q - 1$.
Let $G$ be a group of order $p q$.

Then $G$ is cyclic.


Proof
Lemma
There is:

exactly one Sylow $p$-subgroup of $G$.
exactly one Sylow $q$-subgroup of $G$.
$\Box$

By Sylow $p$-Subgroup is Unique iff Normal, $H$ and $K$ are normal subgroups of $G$.
Let $H = \gen x$ and $K = \gen y$.
To show $G$ is cyclic, it is sufficient to show that $x$ and $y$ commute, because then:

$\order {x y} = \order x \order y = p q$
where $\order x$ denotes the order of $x$ in $G$.


This article, or a section of it, needs explaining.In particular: Why does it follow that $\order {x y} = \order x \order y = p q$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $H$ and $K$ are normal:

$x y x^{-1} y^{-1} = \paren {x y x^{-1} } y^{-1} \in K y^{-1} = K$
and 

$x y x^{-1} y^{-1} = x \paren {y x ^{-1} y^{-1} } \in x H = H$

Now suppose $a \in H \cap K$.
Then:














\(\ds \order a\)

\(\divides\)







\(\ds p\)


















\(\, \ds \land \, \)

\(\ds \order a\)

\(\divides\)







\(\ds q\)














\(\ds \leadsto \ \ \)





\(\ds \order a\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds e\)









where $e$ is the identity of $G$.

Thus:

$x y x^{-1}y^{-1} \in K \cap H = e$
Hence $x y = y x$ and the result follows.
$\blacksquare$





