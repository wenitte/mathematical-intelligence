# 

Source: https://proofwiki.org/wiki/Infimum_of_Set_of_Oscillations_on_Set_is_Arbitrarily_Close

Lemma
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $S_x$ be a set of real sets that contain (as an element) $x$.
Let:

$\map {\omega_f} x = \ds \inf \set {\map {\omega_f} {I \cap D}: I \in S_x}$
where $\map {\omega_f} {I \cap D}$ is the oscillation of $f$ on a real set $I \cap D$:

$\map {\omega_f} {I \cap D} = \ds \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Let $\epsilon \in \R_{>0}$.
Let $\map {\omega_f} x \in \R$.

Then an $I \in S_x$ exists such that:

$\map {\omega_f} {I \cap D} - \map {\omega_f} x < \epsilon$


Proof
Let $\epsilon \in \R_{>0}$.
Let $\map {\omega_f} x \in \R$.
We need to prove that an $I \in S_x$ exists such that:

$\map {\omega_f} {I \cap D} - \map {\omega_f} x < \epsilon$

By Oscillation on Set is an Extended Real Number:

$\forall I \in S_x: \map {\omega_f} {I \cap D} \in \overline \R_{\ge 0}$

Therefore:

$\set {\map {\omega_f} {I \cap D}: I \in S_x}$ is a subset of $\overline \R$

We have also:

$\inf \set {\map {\omega_f} {I \cap D}: I \in S_x} \in \R$
as $\inf \set {\map {\omega_f} {I \cap D}: I \in S_x} = \map {\omega_f} x$

Therefore:










\(\ds \exists I \in S_x: \, \)



\(\ds \map {\omega_f} {I \cap D} - \inf \set {\map {\omega_f} {I' \cap D}: I' \in S_x}\)

\(<\)







\(\ds \epsilon\)





Infimum of Subset of Extended Real Numbers is Arbitrarily Close








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\omega_f} {I \cap D} - \map {\omega_f} x\)

\(<\)







\(\ds \epsilon\)





as $\map {\omega_f} x = \inf \set {\map {\omega_f} {I' \cap D}: I' \in S_x}$



$\blacksquare$





