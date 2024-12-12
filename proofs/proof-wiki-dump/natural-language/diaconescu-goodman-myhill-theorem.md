# 

Source: https://proofwiki.org/wiki/Diaconescu-Goodman-Myhill_Theorem



Theorem
The axiom of choice implies the law of excluded middle.


Proof
Let $\mathbb B = \set {0, 1}$. 
Let $p$ be a proposition.
Let the following two sets be defined:

$A = \set {x \in \mathbb B: x = 0 \lor p}$
$B = \set {x \in \mathbb B: x = 1 \lor p}$
where $\lor$ denotes the disjunction operator.
We have that:

$0 \in A$
and:

$1 \in B$
so both $A$ and $B$ are non-empty

Then the set:

$X = \set {A, B}$
is a set of non-empty sets.

By the axiom of choice, there exists a choice function:

$f: X \to \mathbb B$
since $\ds \bigcup X = \mathbb B$.

There are four cases:

$(1): \quad \map f A = \map f B = 0$
This means that $0 \in B$.
But for that to happen, $\paren {0 = 1} \vee p$ must be true.
So by Disjunctive Syllogism, $p$ is true.


$(2): \quad \map f A = \map f B = 1$
This means that $1 \in A$.
Arguing similarly to case $(1)$, it follows that  $p$ is true in this case also.


$(3): \quad \map f A = 1 \ne \map f B = 0$
This means that $A \ne B$ (or otherwise $f$ would pick the same element).
But if $p$ is true, that means:

$A = B = \mathbb B$
which is a contradiction.
Therefore in this case:

$\neg p$


$(4): \quad \map f A = 0 \ne \map f B = 1$
Using the same reasoning as in case $(3)$, it is seen that in this case:

$\neg p$

So by Proof by Cases:

$\paren {p \vee \neg p}$
That is the Law of Excluded Middle.
$\blacksquare$


Source of Name
This entry was named for Radu Diaconescu, Noah D. Goodman and John R. Myhill.


Also known as
The Diaconescu-Goodman-Myhill Theorem is also known as Diaconescu's Theorem‎ and the Goodman-Myhill Theorem.
It is ever $\mathsf{Pr} \infty \mathsf{fWiki}$'s endeavour to attest a theorem to as many contributors as appropriate.


Historical Note
The proof of the Diaconescu-Goodman-Myhill Theorem was first published in $1975$ by Radu Diaconescu.
It was later independently rediscovered by Noah D. Goodman and John R. Myhill and published in $1978$.
However, the first appearance of the result itself was in Errett Albert Bishop's $1967$ work Foundations of Constructive Analysis, where he set it as an exercise, without including a solution.


Sources
1967: Errett Bishop: Foundations of Constructive Analysis
1975: Radu Diaconescu: Axiom of Choice and Complementation (Proc. Am. Math. Soc. Vol. 51: pp. 176 – 178)  www.jstor.org/stable/2039868
1978: N.D. Goodman and J. Myhill: Choice Implies Excluded Middle (Math. Log. Quart Vol. 24: p. 461)




