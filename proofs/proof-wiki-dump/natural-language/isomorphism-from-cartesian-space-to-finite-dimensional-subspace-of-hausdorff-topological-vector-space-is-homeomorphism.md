# 

Source: https://proofwiki.org/wiki/Isomorphism_from_Cartesian_Space_to_Finite-Dimensional_Subspace_of_Hausdorff_Topological_Vector_Space_is_Homeomorphism

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a Hausdorff topological vector space over $\GF$.
Let $n \in \N$. 
Let $Y$ be a subspace of $X$ with dimension $n$. 
Let $f : \GF^n \to Y$ be a vector space isomorphism.

Then $f$ is a homeomorphism. 


Proof
First, we assure ourselves that such a vector space isomorphism $f : \GF^n \to Y$ exists from Same Dimensional Vector Spaces are Isomorphic.
From Linear Transformation from Cartesian Space on Hausdorff Topological Field to Topological Vector Space is Continuous, $f$ is continuous.
It suffices to show that $f^{-1}$ is continuous.
Let $S$ be the unit sphere in $\GF^n$. 
Let $B$ be the unit ball in $\GF^n$. 
From Heine-Borel Theorem: Normed Vector Space, we have that $S$ is compact. 
Let: 

$K = f \sqbrk S$
From Continuous Image of Compact Space is Compact, $K$ is compact.
From Compact Subspace of Hausdorff Space is Closed, $K$ is closed in $X$.
Note that $\ker f = \set { {\mathbf 0}_X}$, since $f$ is injective, so we have $\mathbf 0_X \not \in K$. 
From Characterization of Closure by Open Sets, there exists an open neighborhood $U$ of $\mathbf 0_X$ such that: 

$U \cap K = \O$
From Open Neighborhood of Origin in Topological Vector Space contains Balanced Open Neighborhood, there exists a balanced open neighborhood of $\mathbf 0_X$ such that $V \subseteq U$.
From the definition of the subspace topology we then obtain that $V \cap Y$ is a  balanced open neighborhood of $\mathbf 0_X$ in $Y$ such that: 

$\paren {V \cap Y} \cap K = \O$
Now set: 

$E = f^{-1} \sqbrk {V \cap Y} = f^{-1} \sqbrk V$
This is non-empty, since $0 \in E$.
Further, we show that $E$ and $S$ are disjoint sets.
If $x \in E \cap S$ we would have: 

$\map f x \in K$
and:

$\map f x \in E$
But since $E \cap S = \O$, this is impossible.
Since $f$ is linear, $f^{-1}$ is linear by Inverse of Linear Transformation is Linear Transformation. 
Since $V$ is balanced, we have that $E = f^{-1} \sqbrk V$ is balanced from Image of Balanced Set under Linear Transformation is Balanced.
From Balanced Set in Topological Vector Space is Connected, $E$ is connected.
We argue that we must have $E \subseteq B$.
Let $D$ be the closed unit ball in $\GF^n$. 
We can then write: 

$\GF^n = B \cup S \cup \paren {\GF^n \setminus D}$
So, we may write: 

$E = \paren {B \cap E} \cup \paren {E \cap \paren {\GF^n \setminus D} }$
from Intersection Distributes over Union, since $E \cap S = \O$. 
Since $\GF^n \setminus D$ is open, if we had: 

$E \cap \paren {\GF^n \setminus D} \ne \O$
then $E$ would be disconnected as the union of disjoint open sets.
We have determined that $E$ is connected, so we have: 

$E \cap \paren {\GF^n \setminus D} = \O$
and so: 

$B \cap E = E$
giving:

$f^{-1} \sqbrk V = E \subseteq B$
From Characterization of von Neumann-Boundedness in Normed Vector Space, we have that $B$ is von Neumann bounded.
So $f^{-1}$ maps an open neighborhood of $\mathbf 0_X$ into a von Neumann bounded set. 
It follows from Characterization of Continuous Linear Functionals on Topological Vector Space that $f^{-1}$ is continuous.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.21$: Theorem




