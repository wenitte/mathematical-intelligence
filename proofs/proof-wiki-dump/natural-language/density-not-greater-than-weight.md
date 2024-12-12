# 

Source: https://proofwiki.org/wiki/Density_not_greater_than_Weight

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Then

$\map d T \le \map w T$
where

$\map d T$ denotes the density of $T$,
$\map w T$ denotes the weight of $T$.


Proof
By definition of weight there exists a basis $\BB$ of $T$:

$\map w T = \card \BB$
where $\card \BB$ denotes the cardinality of $\BB$.
By Axiom of Choice define a mapping $f: \paren {\BB \setminus \O} \to S$:

$\forall U \in \BB: U \ne \O \implies f \sqbrk U \in U$
We will prove that

$\forall U \in \tau: U \ne \O \implies U \cap \Img f \ne \O$
where $\Img f$ denotes the image of $f$.
Let $U \in \tau$ such that

$U \ne \O$
By definition of empty set:

$\exists x: x \in U$
Then by definition of basis:

$\exists V \in \BB: x \in V \subseteq U$
By definition of image:

$f \sqbrk V \in \Img f$
By definition of $f$:

$f \sqbrk V \in V$
By definition of subset:

$f \sqbrk V \in U$
Then by definition of intersection:

$f \sqbrk V \in U \cap \Img f$
Thus by definition of empty set:

$U \cap \Img f \ne \O$

Then:

$\forall x \in S: \forall U \in \tau: x \in U \implies U \cap \Img f \ne \O$
Hence by Condition for Point being in Closure:

$\forall x \in S: x \in \paren {\Img f}^-$
where $^-$ denotes the topological closure.
Then by definition of subset:

$S \subseteq \paren {\Img f}^- \subseteq S$
Thus by definition of set equality:

$S = \paren {\Img f}^-$
Thus by definition:

$\Img f$ is dense
By definition of density:

$\map d T \le \card {\Img f}$
$f$ as $\paren {\BB \setminus \O} \to \Img f$ by definition is surjection.
Therefore by Surjection iff Cardinal Inequality:

$\card {\Img f} \le \card {\BB \setminus \O}$
From Set Difference is Subset:

$\BB \setminus \O \subseteq \BB$
Then by Subset implies Cardinal Inequality:

$\card {\BB \setminus \O} \le \card \BB$
Thus:

$\map d T \le \map w T$
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_4:5




