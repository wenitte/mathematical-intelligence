# 

Source: https://proofwiki.org/wiki/Function_A.E._Equal_to_Measurable_Function_in_Complete_Measure_Space_is_Measurable

Theorem
Let $\struct {X, \Sigma, \mu}$ be a complete measure space.
Let $f : X \to \overline \R$ be a $\Sigma$-measurable function.
Let $g : X \to \overline \R$ be a function such that: 

$f = g$ $\mu$-almost everywhere.

Then $g$ is $\Sigma$-measurable.


Proof
We aim to show that: 

$\set {x \in X : \map g x \le \alpha} \in \Sigma$
for each $\alpha \in \R$. 
Let $\alpha \in \R$. 
Since $f = g$ $\mu$-almost everywhere there exists a $\mu$-null set such that: 

whenever $x \in X$ has $\map f x \ne \map g x$, we have $x \in N$.
We have: 














\(\ds \set {x \in X : \map g x \le \alpha}\)

\(=\)







\(\ds \set {x \in X : \map g x \le \alpha} \cap \paren {N \cup \paren {X \setminus N} }\)





Intersection with Subset is Subset, Union with Complement














\(\ds \)

\(=\)







\(\ds \paren {\set {x \in X : \map g x \le \alpha} \cap N} \cup \paren {\set {x \in X : \map g x \le \alpha} \cap \paren {X \setminus N} }\)





Union Distributes over Intersection



For $x \in X \setminus N$, we have: 

$\map g x = \map f x$
so:

$\set {x \in X \setminus N : \map g x \le \alpha} \cap \paren {X \setminus N} = \set {x \in X \setminus N : \map f x \le \alpha} \cap \paren {X \setminus N}$
Since $f$ is $\Sigma$-measurable, we have: 

$\set {x \in X : \map f x \le \alpha} \in \Sigma$
Since $\sigma$-algebras are closed under complement, we have: 

$X \setminus N \in \Sigma$
From Sigma-Algebra Closed under Countable Intersection, we therefore have: 

$\set {x \in X \setminus N : \map f x \le \alpha} \cap \paren {X \setminus N} \in \Sigma$

Now, from Intersection is Subset, we have: 

$\set {x \in X : \map g x \le \alpha} \cap N \subseteq N$
Since $N$ is $\mu$-null, we have: 

$\set {x \in X : \map g x \le \alpha}$ is $\mu$-null
since $\struct {X, \Sigma, \mu}$ is complete. 
In particular: 

$\set {x \in X : \map g x \le \alpha} \cap N \in \Sigma$
So, since $\sigma$-algebras are closed under countable union, we have: 

$\paren {\set {x \in X : \map g x \le \alpha} \cap N} \cup \paren {\set {x \in X : \map g x \le \alpha} \cap \paren {X \setminus N} } \in \Sigma$
that is: 

$\set {x \in X : \map g x \le \alpha} \in \Sigma$
Since $\alpha \in \R$ was arbitrary, we have: 

$g$ is $\Sigma$-measurable.
$\blacksquare$





