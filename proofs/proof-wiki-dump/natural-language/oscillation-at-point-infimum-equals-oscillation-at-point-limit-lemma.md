# 

Source: https://proofwiki.org/wiki/Oscillation_at_Point_(Infimum)_equals_Oscillation_at_Point_(Limit)/Lemma

Lemma
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $N_x$ be the set of neighborhoods of $x$.
Let $\map {\omega_f} x$ be the oscillation of $f$ at $x$ as defined by:

$\map {\omega_f} x = \ds \inf \set {\map {\omega_f} {I \cap D}: I \in N_x}$
where $\map {\omega_f} {I \cap D}$ is the oscillation of $f$ on a real set $I \cap D$:

$\map {\omega_f} {I \cap D} = \ds \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$
Let $\map {\omega^L_f} x$ be the oscillation of $f$ at $x$ as defined by:

$\map {\omega^L_f} x = \ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap D}$

Let $\map {\omega^L_f} x \in \R$.
Let $\map {\omega_f} x \in \R$.

Then $\map {\omega^L_f} x = \map {\omega_f} x$.


Proof
We know that $\map {\omega^L_f} x$ and $\map {\omega_f} x$ are real numbers.
We need to prove that $\map {\omega^L_f} x = \map {\omega_f} x$.

Let $\epsilon \in \R_{>0}$.

First, we aim to prove that $\size {\map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x} < \epsilon$ for a small enough $h \in R_{>0}$.

$\map {\omega^L_f} x = \ds \lim_{h \mathop \to 0^+} \map {\omega_f} {\openint {x - h} {x + h} \cap D}$ means by the definition of limit from the right that a strictly positive real number $h_1$ exists such that:

$\size {\map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega^L_f} x} < \epsilon$
for every $h$ that satisfies: $0 < h < h_1$.
This means in particular that $\map {\omega_f} {\openint {x - h} {x + h} \cap D} \in \R$ for every $h$ that satisfies: $0 < h < h_1$.
Let $h'$ be a real number that satisfies: $0 < h' < h_1$.
We observe that $\openint {x - h'} {x + h'} \in N_x$.
Therefore, $\map {\omega_f} {\openint {x - h'} {x + h'} \cap D} \in \set {\map {\omega_f} {I \cap D}: I \in N_x}$.
By definition, $\map {\omega_f} x$ is a lower bound for $\set {\map {\omega_f} {I \cap D}: I \in N_x}$.
Accordingly:

$\map {\omega_f} {\openint {x - h'} {x + h'} \cap D} \ge \map {\omega_f} x$

The fact that $\map {\omega_f} x \in \R$ implies that:

$\map {\omega_f} {I \cap D} - \map {\omega_f} x < \epsilon$ by Infimum of Set of Oscillations on Set is Arbitrarily Close
for an $I \in N_x$.
Let $I$ be such an element of $N_x$.
We observe in particular that $\map {\omega_f} {I \cap D} \in \R$.

A neighborhood in $N_x$ contains an open subset that contains the point $x$.
So, $I$ contains such an open subset as $I \in N_x$.
Therefore, a number $h_2 \in \R_{>0}$ exists such that $\openint {x - h_2} {x + h_2}$ is a subset of $I$.
Let $h$ be a real number that satisfies: $0 < h < h_2$.
We observe that $\openint {x - h} {x + h}$ is a subset of $I$.

We have:

$\map {\omega_f} {I \cap D} \in \R$
$\openint {x - h} {x + h}$ is a subset of $I$
Therefore:

$\map {\omega_f} {\openint {x - h} {x + h} \cap D} \le \map {\omega_f} {I \cap D}$ by Oscillation on Subset

Putting all this together, we get for every $h$ that satisfies: $0 < h < \min \set {h_1, h_2}$:














\(\ds \map {\omega_f} {\openint {x - h} {x + h} \cap D}\)

\(\le\)







\(\ds \map {\omega_f} {I \cap D}\)














\(\ds \leadsto \ \ \)





\(\ds \map {\omega_f} x \le \map {\omega_f} {\openint {x - h} {x + h} \cap D}\)

\(\le\)







\(\ds \map {\omega_f} {I \cap D}\)





as $\map {\omega_f} x \le \map {\omega_f} {\openint {x - h} {x + h} \cap D}$ is true








\(\ds \leadsto \ \ \)





\(\ds \map {\omega_f} x \le \map {\omega_f} {\openint {x - h} {x + h} \cap D}\)

\(\le\)







\(\ds \map {\omega_f} {I \cap D} < \map {\omega_f} x + \epsilon\)





as $\map {\omega_f} {I \cap D} < \map {\omega_f} x + \epsilon$ is true








\(\ds \leadsto \ \ \)





\(\ds \map {\omega_f} x \le \map {\omega_f} {\openint {x - h} {x + h} \cap D}\)

\(<\)







\(\ds \map {\omega_f} x + \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds 0 \le \map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x}\)

\(<\)







\(\ds \epsilon\)










Thus, we achieved our first aim.

Next, we get for every $h$ that satisfies: $0 < h < \min \set {h_1, h_2}$:














\(\ds \size {\map {\omega^L_f} x - \map {\omega_f} x}\)

\(=\)







\(\ds \size {\map {\omega^L_f} x - \map {\omega_f} {\openint {x - h} {x + h} \cap D} + \map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x}\)




















\(\ds \)

\(\le\)







\(\ds \size {\map {\omega^L_f} x - \map {\omega_f} {\openint {x - h} {x + h} \cap D} } + \size {\map {\omega_f} {\openint {x - h} {x + h} \cap D} - \map {\omega_f} x}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \epsilon + \epsilon\)




















\(\ds \)

\(=\)







\(\ds 2 \epsilon\)









This holds for every $\epsilon \in \R_{>0}$.
Therefore, $\size {\map {\omega^L_f} x - \map {\omega_f} x} = 0$ as $\size {\map {\omega^L_f} x - \map {\omega_f} x}$ is independent of $\epsilon$.
Accordingly:

$\map {\omega^L_f} x = \map {\omega_f} x$
$\blacksquare$





