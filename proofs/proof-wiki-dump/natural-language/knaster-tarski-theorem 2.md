# 

Source: https://proofwiki.org/wiki/Knaster-Tarski_Theorem



Theorem
Let $\struct {L, \preceq}$ be a complete lattice.
Let $f: L \to L$ be an increasing mapping.
Let $F$ be the set (or class) of fixed points of $f$.

Then $\struct {F, \preceq}$ is a complete lattice.


Proof
Let $S \subseteq F$.
Let $s = \bigvee S$ be the supremum of $S$.
We wish to show that there is an element of $F$ that succeeds all elements of $S$ and is the smallest element of $F$ to do so.
By the definition of supremum, an element succeeds all elements of $S$ if and only if it succeeds $s$.
Let $U = s^\succeq$ be the upper closure of $s$.
Thus we seek the smallest fixed point of $f$ that lies in $U$.
Note that $U = \closedint s \top$, the closed interval between $s$ and the top element of $L$.
First we show that $U$ is closed under $f$.
We have that:

$\forall a \in S: a \preceq s$
so:

$a = \map f a \preceq \map f s$
Thus $\map f s$ is an upper bound of $S$.
So by the definition of supremum, $s \preceq \map f s$.
Let $x \in U$.
Then $s \preceq x$.
So:

$\map f s \preceq \map f x$
Since $s \preceq \map f s$, it follows that:

$s \preceq \map f x$
so:

$\map f x \in U$
Thus the restriction of $f$ to $U$ is an increasing mapping from $U$ to $U$.
By Closed Interval in Complete Lattice is Complete Lattice, $\struct {U, \preceq}$ is a complete lattice.
Thus by Knaster-Tarski Lemma, $f$ has a smallest fixed point in $U$.
Thus $S$ has a supremum in $F$.
A similar argument shows that $S$ has an infimum in $F$.
Since this holds for all $S \subseteq F$, it follows that $\struct {F, \preceq}$ is a complete lattice.
$\blacksquare$


Also see
Knaster-Tarski Lemma
Knaster-Tarski Lemma: Power Set form


Source of Name
This entry was named for Bronisław Knaster and Alfred Tarski.


Historical Note
Despite the fact that the Knaster-Tarski Theorem bears the name of both Bronisław Knaster and Alfred Tarski, it appears that Tarski claims sole credit.


Sources
1955: Alfred Tarski: A lattice-theoretical fixpoint theorem and its applications (Pacific J. Math. Vol. 5, no. 2: pp. 285 – 309): Theorem $1$




