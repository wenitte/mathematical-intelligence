# 

Source: https://proofwiki.org/wiki/Real_Function_is_Continuous_at_Point_iff_Oscillation_is_Zero



Theorem
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $N_x$ be the set of open subset neighborhoods of $x$.
Let $\map {\omega_f} x$ be the oscillation of $f$ at $x$:

$\map {\omega_f} x = \ds \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
where $\map {\omega_f} {I \cap D}$ denotes the oscillation of $f$ on $I \cap D$:

$\map {\omega_f} {I \cap D} = \ds \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Then $\map {\omega_f} x = 0$ if and only if $f$ is continuous at $x$.


Proof
Necessary Condition
Let $\map {\omega_f} x = 0$.
Let $\epsilon > 0$.
Suppose that $\forall I: I \in N_x: \map {\omega_f} {I \cap D} \ge \epsilon$.
Then by definition of oscillation at point, $\map {\omega_f} x \ge \epsilon$. 
This contradicts $\map {\omega_f} x = 0$.
From this contradiction we deduce that:

$\exists J: J \in N_x: \map {\omega_f} {J \cap D} < \epsilon$
For this particular $J$, there is an open set $O \subset J$ that contains $x$ by the definition of open subset neighborhood.
Therefore, a $\delta \in \R_{>0}$ exists such that $\openint {x - \delta} {x + \delta}$ is a subset of $O$.
So, if $y$ satisfies:

$\size {x - y} < \delta$
Then:

$y \in J$
and, if $y \in D$:

$\size {\map f x - \map f y} \le \map {\omega_f} {J \cap D}$
Since $\map {\omega_f} {J \cap D} < \epsilon$ it follows by the definition of continuity that $f$ is continuous at $x$.
$\Box$


Sufficient Condition
Let $f$ be continuous at $x$.
Then $\forall \epsilon > 0: \exists \delta \in \R_{>0}$ such that, if $y \in D$:

$\size {x - y} < \delta \implies \size {\map f x - \map f y} < \epsilon$

Let the interval $I_\delta$ be defined as:

$I_\delta := \openint {x - \delta} {x + \delta}$
$I_\delta$ is an element of $N_x$ as $I_\delta$ is a neighborhood of $x$.
We have:














\(\ds \map {\omega_f} {I_\delta \cap D}\)

\(=\)







\(\ds \sup \set {\size {\map f y - \map f z}: y, z \in I_\delta \cap D}\)





Definition of oscillation on set














\(\ds \)

\(=\)







\(\ds \sup \set {\size {\map f y - \map f x + \map f x - \map f z}: y, z \in I_\delta \cap D}\)




















\(\ds \)

\(\le\)







\(\ds \sup \set {\size {\map f y - \map f x} + \size {\map f x - \map f z}: y, z \in I_\delta \cap D}\)





Triangle Inequality for Vectors in Euclidean Space and Supremum of Function is less than Supremum of Greater Function














\(\ds \)

\(=\)







\(\ds \sup \set {\size {\map f y - \map f x}: y \in I_\delta \cap D} + \sup \set {\size {\map f x - \map f z}: z \in I_\delta \cap D}\)





Supremum of Sum equals Sum of Suprema














\(\ds \)

\(=\)







\(\ds \sup \set {\size {\map f x - \map f y}: y \in I_\delta \cap D} + \sup \set {\size {\map f x - \map f y}: y \in I_\delta \cap D}\)




















\(\ds \)

\(=\)







\(\ds 2 \sup \set {\size {\map f x - \map f y}: y \in I_\delta \cap D}\)




















\(\ds \)

\(<\)







\(\ds 2 \epsilon\)





as $\size {\map f x - \map f y} < \epsilon$ whenever $y \in I_\delta \cap D$



This gives:














\(\ds \map {\omega_f} x\)

\(=\)







\(\ds \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}\)





Definition of oscillation at point














\(\ds \)

\(\le\)







\(\ds \map {\omega_f} {I_\delta \cap D}\)





Definition of Infimum of Subset of Real Numbers and that $I_\delta \in N_x$














\(\ds \)

\(<\)







\(\ds 2 \epsilon\)










This holds true for any value of $\epsilon$.
Thus $\map {\omega_f} x$ must be $0$.
Hence the result.
$\blacksquare$





