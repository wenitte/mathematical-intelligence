# 

Source: https://proofwiki.org/wiki/Ax-Grothendieck_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $f: \C^n \to \C^n$ be a polynomial map.
Let $f$ be injective.

Then $f$ is surjective.


Proof
The proof proceeds as follows:

$(1): \quad$ showing that the theorem can be captured using a first-order sentences in the language of rings
$(2): \quad$ showing that the theorem is true for at least one field of every characteristic $p > 0$
$(3): \quad$ applying the Lefschetz Principle (First-Order).


First-Order Sentences in Language of Rings
Since $n$ is fixed, we can quantify over polynomials.
There are only finitely many coefficients to quantify over.
Therefore each variable occurs with degree at most $d$, say.
Thus, for each $n$ and $d$, we can build an $\LL_r$ sentence which holds in a field $F$ if and only if every injective polynomial map $F^n \to F^n$ where each variable occurs with at most degree $d$ is surjective.

First, we write a formula:

$\phi_{\tuple {i_1, \dots, i_n} }$
which says that the $n$-variable polynomial map with coefficients $a_{\tuple {i_1, \dots, i_n} }$ where $(\tuple {i_1, \dots, i_n} \le \tuple {d, \dots, d}$ is injective.


This article, or a section of it, needs explaining.In particular: There's too many $($ in the above statement. What is really meant here?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Note that the polynomial map takes on $n$-tuple images, so is of the form:

$f = \tuple {f_1, \dots, f_n}$
where each $f_k$ is a polynomial in $n$ variables.
The variables $a_{k, \tuple {i_1, \dots, i_n} }$ in the sentence below are intended to be interpreted as the coefficients of $f_k$:

$\ds \forall x_1 \cdots \forall x_n \forall y_1 \cdots \forall \map {y_n} {\paren {\bigwedge_{k \mathop \le n} \ \sum_{\tuple {i_1, \ldots, i_n} } a_{k, \tuple {i_1, \ldots, i_n} } {x_1}^{i_1} \cdots  {x_n}^{i_n} = \sum_{ \tuple {i_1, \ldots, i_n} } a_{k, \tuple {i_1, \ldots, i_n} } {y_1}^{i_1} \cdots {y_n}^{i_n} } \to \bigwedge_{i \mathop = 1, \ldots, n} x_i = y_i}$

We also write a formula $\psi_{(i_1,\dots,i_n)}$ which says that such a polynomial is surjective:

$\ds \forall z_1 \cdots \forall z_n \exists x_1 \cdots \exists x_n \paren {\bigwedge_{k \mathop \le n} \ \sum_{tuple {i_1, \ldots, i_n} } a_{k, \tuple {i_1, \ldots, i_n} } {x_1}^{i_1} \cdots {x_n}^{i_n} = z_k}$

Finally, we combine these into the required implication, quantifying over all coefficients:

$\ds \underset {k, \tuple {i_1, \ldots, i_n} } {\huge \forall} a_{k, \tuple {i_1, \ldots, i_n} } \paren {\phi_{\tuple {i_1, \ldots, i_n} } \to \psi_{\tuple {i_1, \ldots, i_n} } }$
Note that we have one of these sentences for every maximum degree $d$ of the variables in a polynomial map.
Thus it has been demonstrated that the theorem can be captured using a first-order sentences in the language of rings.


This article, or a section of it, needs explaining.In particular: Is that "a first-order sentence" or "first-order sentences"? It's one or the other. Also in the exposition in the first line.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\Box$


Field of Characteristic $p > 0$
Since injections on finite sets are necessarily surjective, every injective polynomial map $k^n \to k^n$ is surjective when $k$ is a finite field.
We extend this to the algebraic closure of $k$.
This will demonstrate that the sentence above is satisfied by at least one model of the theory of algebraically closed fields of characteristic $p$ for every $p > 0$.

Let $\mathbb F^{\operatorname{alg} }_p$ be the algebraic closure of the finite field with $p$ elements.
Suppose there is an injective polynomial map:

$f: \paren {\mathbb F^{\operatorname{alg} }_p}^n \to \paren {\mathbb F^{\operatorname{alg} }_p}^n$
which is not surjective.

Let $A$ be the set of coefficients appearing in $f$.
Let $\tuple {z_1, \ldots, z_n} \in \paren {\mathbb F^{\operatorname{alg} }_p}^n$ be an element not in the range of $f$.

Consider the subfield $k$ of $\mathbb F^{\operatorname{alg}}_p$ generated by the elements of $A$ and the elements $z_1, \ldots, z_n$.
We have that:

$\ds \mathbb F^{\operatorname{alg} }_p = \bigcup_{n \mathop = 1, 2, \ldots} \mathbb F_{p^n}$
Therefore any finitely generated subfield is contained in some finite sub-union:

$\ds \bigcup_{n \mathop = 1, 2, \ldots, N} \mathbb F_{p^n}$
Hence $k$ is finite.
Therefore, $f {\restriction_{k^n} }$ is an injective polynomial map on a finite field which is not surjective.
This is a contradiction.
So it must be the case that every injective polynomial map on $\paren {\mathbb F^{\operatorname{alg} }_p}^n$ is surjective.
That is:

$\paren {\mathbb F^{\operatorname{alg} }_p}^n$ satisfies the sentences above for each characteristic $p > 0$.

Thus it has been demonstrated that the theorem is true for at least one field of every characteristic $p > 0$.
$\Box$


Application of Lefschetz Principle
It has been shown that the sentences above are true in some algebraically closed field of characteristic $p$ for all $p > 0$.
By the Lefschetz Principle, it follows that they are true in $\C$.
$\blacksquare$


Source of Name
This entry was named for James Burton Ax and Alexander Grothendieck.





