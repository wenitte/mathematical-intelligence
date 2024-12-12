# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Lipschitz_Equivalent_Metrics



Theorem
The following definitions of the concept of Lipschitz Equivalent Metrics are equivalent:

Definition 1
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.
Let $\exists h, k \in \R_{>0}$ such that:

$\forall x, y \in A: h \map {d_2} {x, y} \le \map {d_1} {x, y} \le k \map {d_2} {x, y}$

Then $d_1$ and $d_2$ are described as Lipschitz equivalent.

Definition 2
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.
Let $\exists K_1, K_2 \in \R_{>0}$ such that:

$(1): \quad \forall x, y \in A: \map {d_2} {x, y} \le K_1 \map {d_1} {x, y}$
$(2): \quad \forall x, y \in A: \map {d_1} {x, y} \le K_2 \map {d_2} {x, y}$

Then $d_1$ and $d_2$ are described as Lipschitz equivalent.


Proof
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.

Definition 1 implies Definition 2
Let $d_1$ and $d_2$ be Lipschitz equivalent by definition 1:
Then by definition:

$\exists h, k \in \R_{>0} \forall x, y \in A: h \map {d_2} {x, y} \le \map {d_1} {x, y} \le k \map {d_2} {x, y}$

Let $K_1 = \dfrac 1 h, K_2 = k$.










\(\ds \exists h \in \R_{>0}: \forall x, y \in A: \, \)



\(\ds h \map {d_2} {x, y}\)

\(\le\)







\(\ds \map {d_1} {x, y}\)





Definition 1 of Lipschitz Equivalent Metrics








\(\ds \leadsto \ \ \)





\(\ds \map {d_2} {x, y}\)

\(\le\)







\(\ds \dfrac 1 h \map {d_1} {x, y}\)




















\(\ds \)

\(=\)







\(\ds K_1 \map {d_1} {x, y}\)









and:










\(\ds \exists k \in \R_{>0}: \forall x, y \in A: \, \)



\(\ds \map {d_1} {x, y}\)

\(\le\)







\(\ds k \map {d_2} {x, y}\)





Definition 1 of Lipschitz Equivalent Metrics














\(\ds \)

\(=\)







\(\ds K_2 \map {d_2} {x, y}\)









Thus $d_1$ and $d_2$ are Lipschitz equivalent by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $d_1$ and $d_2$ be Lipschitz equivalent by definition 2.
Then by definition:

$(1): \quad \exists K_1 \in \R_{>0}: \forall x, y \in A: \map {d_2} {x, y} \le K_1 \map {d_1} {x, y}$
$(2): \quad \exists K_2 \in \R_{>0}: \forall x, y \in A: \map {d_1} {x, y} \le K_2 \map {d_2} {x, y}$

Let $h = \dfrac 1 {K_1}, k = K_2$.










\(\ds \exists K_1 \in \R_{>0}: \forall x, y \in A: \, \)



\(\ds \map {d_2} {x, y}\)

\(\le\)







\(\ds K_1 \map {d_1} {x, y}\)





Definition 2 of Lipschitz Equivalent Metrics








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 {K_1} \map {d_2} {x, y}\)

\(\le\)







\(\ds \map {d_1} {x, y}\)




















\(\ds \)

\(=\)







\(\ds h \map {d_1} {x, y}\)










and:










\(\ds \exists K_2 \in \R_{>0}: \forall x, y \in A: \, \)



\(\ds \map {d_1} {x, y}\)

\(\le\)







\(\ds K_2 \map {d_2} {x, y}\)





Definition 2 of Lipschitz Equivalent Metrics














\(\ds \)

\(=\)







\(\ds k \map {d_2} {x, y}\)









Thus $d_1$ and $d_2$ are Lipschitz equivalent by definition 1.
$\blacksquare$





