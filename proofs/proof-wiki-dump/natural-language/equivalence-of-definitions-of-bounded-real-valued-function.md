# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bounded_Real-Valued_Function



Theorem
The following definitions of the concept of Bounded Real-Valued Function are equivalent:

Definition 1
$f$ is bounded on $S$ if and only if:

$f$ is bounded above on $S$
and also:

$f$ is bounded below on $S$.
Definition 2
$f$ is bounded on $S$ if and only if:

$\exists K \in \R_{\ge 0}: \forall x \in S: \size {\map f x} \le K$
where $\size {\map f x}$ denotes the absolute value of $\map f x$.

Definition 3
$f$ is bounded on $S$ if and only if:

$\exists a, b \in \R_{\ge 0}: \forall x \in S: \map f x \in \closedint a b$
where $\closedint a b$ denotes the (closed) real interval from $a$ to $b$.


Proof
Let $S$ be a set.
Let $f: S \to \R$ be a real-valued function.

Definition 1 implies Definition 2
Let $f$ be bounded according to definition 1:

bounded above in $S$ by $H \in \R$
bounded below in $S$ by $L \in \R$
Thus by definition:

$\forall x \in S: L \le \map f x$
$\forall x \in S: \map f x \le H$
By Equivalence of Definitions of Bounded Subset of Real Numbers:

$\exists K \in \R_{\le 0}: \forall x \in S: \size {\map f x} \le K$
So $f$ is bounded according to definition 2.
$\Box$


Definition 2 implies Definition 1
Let $f$ be bounded according to definition 2:

$\exists K \in \R_{\le 0}: \forall x \in S: \size {\map f x} \le K$

Then by Equivalence of Definitions of Bounded Subset of Real Numbers:

$\exists K \in \R_{\le 0}: \forall x \in S: -K \le \map f x$
and so $f$ is bounded below in $S$ by $-K \in \R$
and

$\exists K \in \R_{\le 0}: \forall x \in S: \map f x \le K$
and so $f$ is bounded above in $S$ by $K \in \R$.
So $f$ is bounded according to definition 2.
$\Box$


Definition 1 implies Definition 3
Let $f$ be bounded according to definition 1:

bounded above in $S$ by $H \in \R$
bounded below in $S$ by $L \in \R$
Thus by definition:

$\forall x \in S: L \le \map f x$
$\forall x \in S: \map f x \le H$
That is:

$\map f x \in \closedint L H$
Thus $f$ is bounded according to definition 3.
$\Box$


Definition 3 implies Definition 1
Let $f$ be bounded according to definition 3:

$\exists a, b \in \R_{\le 0}: \forall x \in S: \map f x \in \closedint a b$
Thus by definition:

$\forall x \in S: a \le \map f x$
and so $f$ is bounded below in $S$ by $a \in \R$

$\forall x \in S: \map f x \le b$
and so $f$ is bounded above in $S$ by $b \in \R$.
So $f$ is bounded according to definition 1.
$\blacksquare$





