# 

Source: https://proofwiki.org/wiki/Product_of_Integral_Multiples/Proof_2

Theorem
Let $\struct {F, +, \times}$ be a field.
Let $a, b \in F$ and $m, n \in \Z$.

Then:

$\paren {m \cdot a} \times \paren {n \cdot b} = \paren {m n} \cdot \paren {a \times b}$
where $m \cdot a$ is as defined in Integral Multiple.


Proof
First let $m = 0$ or $n = 0$.
Without loss of generality, let $m = 0$.
The case where $n = 0$ follows the same lines.
We have:










\(\ds \forall a, b \in R: \forall n \in \Z_{>0}: \, \)



\(\ds \paren {m \cdot a} \times \paren {n \cdot b}\)

\(=\)







\(\ds \paren {0 \cdot a} \times \paren {n \cdot b}\)





Definition of $m$














\(\ds \)

\(=\)







\(\ds 0_F \times \paren {n \cdot b}\)





Definition of Integral Multiple














\(\ds \)

\(=\)







\(\ds 0_F\)





Definition of Field Zero














\(\ds \)

\(=\)







\(\ds 0_F \times \paren {a \times b}\)





Definition of Field Zero














\(\ds \)

\(=\)







\(\ds 0 \cdot \paren {a \times b}\)





Definition of Integral Multiple














\(\ds \)

\(=\)







\(\ds \paren {0 \times n} \cdot \paren {a \times b}\)





$0$ is zero of $\Z$














\(\ds \)

\(=\)







\(\ds \paren {m \times n} \cdot \paren {a \times b}\)





Definition of Integral Multiple



$\Box$

Next let $m > 0$ and $n > 0$.










\(\ds \forall a, b \in R: \forall m, n \in \Z_{>0}: \, \)



\(\ds \paren {m \cdot a} \times \paren {n \cdot b}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^m a} \times \paren {\sum_{i \mathop = 1}^n b}\)





Definition of Integral Multiple














\(\ds \)

\(=\)







\(\ds \sum_{\substack {1 \mathop \le i \mathop \le m \\ 1 \mathop \le j \mathop \le n} } \paren {a \times b}\)





General Distributivity Theorem














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^m \paren {\sum_{j \mathop = 1}^n \paren {a \times b} }\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds m \cdot \paren {n \cdot \paren {a \times b} }\)





Definition of Integral Multiple














\(\ds \)

\(=\)







\(\ds \paren {m n} \cdot \paren {a \times b}\)





Powers of Group Elements: Additive Notation



$\Box$

The results for $m < 0$ and $n < 0$ follow directly from Powers of Group Elements.
$\blacksquare$





