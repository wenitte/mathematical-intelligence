# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Removable_Discontinuity_of_Real_Function



Theorem
Let $A \subseteq \R$ be a subset of the real numbers.
Let $f: A \to \R$ be a real function.
Let $f$ be discontinuous at $a \in A$.
The following definitions of the concept of removable discontinuity are equivalent:

Definition 1 
The point $c$ is a removable discontinuity of $f$ if and only if the limit $\ds \lim_{x \mathop \to c} \map f x$ exists.

Definition 2 
The point $c$ is a removable discontinuity of $f$ if and only if there exists $b \in \R$ such that the function $f_b$ defined by:

$\map {f_b} x = \begin {cases} \map f x &: x \ne c \\ b &: x = c \end {cases}$
is continuous at $c$.


Proof
Lemma
Let $A \subseteq \R$ be a subset of the real numbers.
Let $f, g: A \to \R$ be real functions.
Let $a \in A$.
Suppose $\map f x = \map g x$ for every $x \ne a$.
Suppose the limit $\ds \lim_{x \mathop \to a} \map f x$ exists.
Then the limit $\ds \lim_{x \mathop \to a} \map g x$ exists and is equal to $\ds \lim_{x \mathop \to a} \map f x$.
$\Box$

Let $A \subseteq \R$ be a subset of the real numbers.
Let $f: A \to \R$ be a real function.
Let $f$ be discontinuous at $a \in A$.
For any $b \in \R$, define the function $f_b$ by:

$\map {f_b} x = \begin {cases} \map f x &: x \ne a \\ b &: x = a \end {cases}$
Then $\map {f_b} x = \map f x$ for every $x \ne a$.


Definition 1 implies Definition 2
Suppose the limit $\ds \lim_{x \mathop \to a} \map f x$ exists.
Let $\ds \lim_{x \mathop \to a} \map f x = b$.
Then:














\(\ds \map {f_b} a\)

\(=\)







\(\ds b\)





Definition of $f_b$














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to a} \map f x\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to a} \map {f_b} x\)





Lemma



By definition, $f_b$ is continuous at $a$. 
$\Box$


Definition 2 implies Definition 1
Suppose there exists $b \in \R$ such that $f_b$ is continuous at $a$.
By definition of continuity:

$\ds \lim_{x \mathop \to a} \map {f_b} x = \map {f_b} a = b $
By the lemma:

$\ds \lim_{x \mathop \to a} \map f x = \lim_{x \mathop \to a} \map {f_b} x  = b$
It follows that the limit $\ds \lim_{x \mathop \to a} \map f x$ exists.
$\blacksquare$





