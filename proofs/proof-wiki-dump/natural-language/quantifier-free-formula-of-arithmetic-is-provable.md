# 

Source: https://proofwiki.org/wiki/Quantifier-Free_Formula_of_Arithmetic_is_Provable



Theorem
Let $\phi$ be a sentence in the language of arithmetic.
Suppose $\phi$ contains no quantifiers.
Suppose also that $\N \models \phi$.

That is, the natural numbers model $\phi$.
Then $\phi$ is a theorem of minimal arithmetic.


Corollary
Let $\phi$ be a sentence in the language of arithmetic.
Suppose $\phi$ contains no quantifiers.
Then exactly one of:

$\phi$
$\neg \phi$
is a theorem of minimal arithmetic.


Proof
By Existence of Negation Normal Form of Statement, $\phi$ is logically equivalent to a WFF $\psi$ such that:

The only logical connectives are $\set {\neg, \land, \lor}$.
The connective $\neg$ only appears in front of a predicate symbol.

Proceed by induction on the structure of WFFs in the language of arithmetic.


Predicate Symbol
Let $\alpha, \beta$ be terms.
Let $a, b \in \N$ be:

$a = \map {\operatorname{val}_\N} \alpha$
$b = \map {\operatorname{val}_\N} \beta$
where $\map {\operatorname{val}_\AA} \tau$ is the value of $\tau$.

Suppose $\psi$ is $\alpha = \beta$.
The result follows from Equality of Terms of Natural Numbers is Provable.

Suppose $\psi$ is $\alpha < \beta$.
Then $a < b$.
By Equality of Terms of Natural Numbers is Provable:\

$\alpha = \sqbrk a$
$\beta = \sqbrk b$
are theorems, where $\sqbrk x$ is the unary representation of $x$.
The result follows from Substitution Property of Equality and Ordering of Natural Numbers is Provable.

By definition of language of arithmetic, these are the only predicate symbols.
$\Box$


Negation
By definition of negation normal form, $\neg$ is only applied to predicate symbols.
That is, only in the form:

$\neg \map P {\tau_1, \dotsc, \tau_n}$
Let $\alpha, \beta, a, b$ be defined as above.

Suppose $\psi$ is $\neg {\alpha = \beta}$.
Then $a \ne b$.
The result follows from Substitution Property of Equality and Inequality of Natural Numbers is Provable.

Suppose $\psi$ is $\neg {\alpha < \beta}$.
Then $a \ge b$.
The result follows from Substitution Property of Equality and Negation of Ordering of Natural Numbers is Provable.
$\Box$


Connectives
Let $A, B$ be WFFs.
By definition of negation normal form, the only other connectives are $\land$ and $\lor$.

Suppose $\psi$ is:

$A \land B$
Then $\N \models A$ and $\N \models B$ by definition of value of formula.
By the inductive hypothesis, $A$ and $B$ are theorems.
The result follows from Rule of Conjunction.

Suppose $\psi$ is:

$A \lor B$
Then $\N \models A$ or $\N \models B$.
Suppose that $\N \models A$.
Then, by the inductive hypothesis, $A$ is a theorem.
The result follows from Rule of Addition.
Likewise, if $\N \models B$, the result follows from Rule of Addition.
$\Box$

By the Principle of Structural Induction, every $\psi$ in this form has this property.
But by the definition of logical equivalence, $\phi$ can be derived from $\psi$.
Hence the result.
$\blacksquare$





