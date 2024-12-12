# 

Source: https://proofwiki.org/wiki/Class_which_has_Injection_to_Subclass_of_Well-Orderable_Class_is_Well-Orderable

Theorem
Let $B$ be a well-orderable class.
Let $A$ be a class such that there exists an injection $f: A \to C$, where $C$ is a subclass of $B$.

Then $A$ is a well-orderable class.


Proof
Let $\RR$ be a well-ordering that can be established on $B$.
This can always be done, as $B$ is a well-orderable class.
Let $F$ be an injection that maps each element $x$ of $A$ to an element $\map F x$ of $B$.
Let $\preccurlyeq$ be the class of all ordered pairs $\tuple {x, y}$ of elements of $A$ such that $\tuple {\map F x, \map F y} \in \RR$.
Thus:

$(1): \quad x \preccurlyeq y \iff \tuple {\map F x, \map F y} \in \RR$

It will be demonstrated that $A$ is well-ordered under $\preccurlyeq$.

Let $\Img F$ denote the image of $F$.
By Subclass of Well-Ordered Class is Well-Ordered, $\Img F$ is well-ordered under $\RR$.

We have by hypothesis that $\RR$ is a well-ordering
Hence a fortiori:

$\RR$ is reflexive, transitive and antisymmetric
Every pair of elements of $B$ is comparable under $\RR$

From reflexivity:

$\forall a \in A: \forall a \in A: \tuple {\map F a, \map F a} \in \RR$
and so from $(1)$:

$\forall a \in A: a \preccurlyeq a$
Thus $\preccurlyeq$ is reflexive on $A$.

Let $a, b, c, \in A$ such that $a \preccurlyeq b$ and $b \preccurlyeq c$.
Then from $(1)$:

$\tuple {\map F a, \map F b} \in \RR$
and:

$\tuple {\map F b, \map F c} \in \RR$
As $\RR$ is transitive:

$\tuple {\map F a, \map F c} \in \RR$
Hence from $(1)$:

$a \preccurlyeq c$
Thus $\preccurlyeq$ is transitive on $A$.

Let $a, b \in A$ such that $a \preccurlyeq b$ and $b \preccurlyeq a$.
Then from $(1)$:

$\tuple {\map F a, \map F b} \in \RR$
and:

$\tuple {\map F b, \map F a} \in \RR$
As $\RR$ is antisymmetric:

$\map F a = \map F b$
Because $F$ is an injection:

$a = b$
Thus $\preccurlyeq$ is antisymmetric on $A$.

Let $a, b \in A$ be arbitrary.
As every pair of elements of $B$ is comparable under $\RR$:

$\tuple {\map F a, \map F b} \in \RR$ or $\tuple {\map F b, \map F a} \in \RR$
Hence from $(1)$:

$a \preccurlyeq b$ or $b \preccurlyeq a$
Hence every pair of elements of $A$ is comparable under $\preccurlyeq$.

Thus a priori $\preccurlyeq$ is a total ordering on $A$.

Let $C$ be an arbitrary non-empty subclass of $A$.
Let $C'$ be the class of all $\map F x$ such that $x \in C$.
We have that $C'$ is a subclass of $B$.
Then as $B$ is well-ordered by $\RR$, it follows that $C'$ has a smallest element.
This smallest element is $\map F b$ for some $b \in C$.
Let $x \in C$.
Then:

$\map F x \in C'$
and so:

$\tuple {\map F b, \map F x} \in \RR$
Hence by $(1)$:

$b \preccurlyeq x$
As $x$ is arbitrary:

$\forall x \in C: b \preccurlyeq x$
and so $b$ is the smallest element of $C$ with respect to $\preccurlyeq$.

It follows by definition that $\preccurlyeq$ is a well-ordering.
Thus $A$ is well-ordered by $\preccurlyeq$.
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text I$ -- Superinduction and Well Ordering: $\S 1$ Introduction to well ordering: Proposition $1.2$




