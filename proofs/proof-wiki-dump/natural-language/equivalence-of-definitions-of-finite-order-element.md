# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Finite_Order_Element



Theorem
The following definitions of the concept of Finite Order Element are equivalent:

Let $G$ be a group whose identity is $e_G$.
Let $x \in G$ be an element of $G$.

Definition 1
$x$ is of finite order, or has finite order if and only if there exists $k \in \Z_{> 0}$ such that $x^k = e_G$.

Definition 2
$x$ is of finite order, or has finite order if and only if there exist $m, n \in \Z_{> 0}$ such that $m \ne n$ but $x^m = x^n$.


Proof
$(1)$ implies $(2)$
Let $x$ be a finite order element of $G$ by definition 1.
Then by definition there exists $k \in \Z_{>0}$ such that $x^k = e_G$.
Consider some $m, n \in \Z_{>0}$ such that $m = n + k$.














\(\ds x^m\)

\(=\)







\(\ds x^{n + k}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds x^n x^k\)





Powers of Group Elements/Sum of Indices














\(\ds \)

\(=\)







\(\ds x^n e_G\)





by hypothesis














\(\ds \)

\(=\)







\(\ds x^n\)





Definition of Identity Element



Thus $x$ is a finite order element of $G$ by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $x$ be a finite order element of $G$ by definition 2.
That is, there exists $m, n \in \Z_{>0}$ such that $x^m = x^n$ but $m \ne n$.
Without loss of generality, suppose that $m > n$.
Let $k = m - n$.
From $x^m = x^n$ it follows from Powers of Group Elements that:














\(\ds x^k\)

\(=\)







\(\ds x^{m - n}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds x^{m + \paren{-n } }\)





Definition of Subtraction/Integers














\(\ds \)

\(=\)







\(\ds x^m x^{-n}\)





Powers of Group Elements/Sum of Indices














\(\ds \)

\(=\)







\(\ds x^n x^{-n}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren{x x^{-1} } ^ n\)




















\(\ds \)

\(=\)







\(\ds \paren{e_G } ^ n\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds e_G\)





Definition of Identity Element



Thus there exists $k \in \Z_{>0}$ such that $x^k = e_G$.
Thus $x$ is a finite order element of $G$ by definition 1.
$\blacksquare$





