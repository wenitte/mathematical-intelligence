# 

Source: https://proofwiki.org/wiki/Absolute_Continuity_of_Complex_Measure_in_terms_of_Jordan_Decomposition



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$.
Let $\nu$ be a complex measure on $\struct {X, \Sigma}$.
Let $\tuple {\nu_1, \nu_2, \nu_3, \nu_4}$ be the Jordan decomposition of $\nu$.

Then $\nu$ is absolutely continuous with respect to $\mu$ if and only if:

$\nu_1$, $\nu_2$, $\nu_3$ and $\nu_4$ are absolutely continuous with respect to $\mu$.


Proof
Let $\cmod \nu$ be the variation of $\nu$.

Sufficient Condition
Suppose that: 

$\nu_1$, $\nu_2$, $\nu_3$ and $\nu_4$ are absolutely continuous with respect to $\mu$.
Then: 

whenever $A \in \Sigma$ has $\map \mu A = 0$, we have $\map {\nu_1} A = 0$, $\map {\nu_2} A = 0$, $\map {\nu_3} A = 0$ and $\map {\nu_4} A = 0$.
From Bound for Variation of Complex Measure in terms of Jordan Decomposition, we have: 

$\map {\cmod \nu} A \le \map {\nu_1} A + \map {\nu_2} A + \map {\nu_3} A + \map {\nu_4} A$
giving:

$\map {\cmod \nu} A \le 0$
so:

$\map {\cmod \nu} A = 0$
We therefore have: 

whenever $A \in \Sigma$ has $\map \mu A = 0$, we have $\map {\cmod \nu} A = 0$.
So:

$\cmod \nu$ is absolutely continuous with respect to $\mu$.
$\Box$


Necessary Condition
Suppose that $\nu$ is absolutely continuous with respect to $\mu$.
Then:

$\cmod \nu$ is absolutely continuous with respect to $\mu$.
That is: 

whenever $A \in \Sigma$ has $\map \mu A = 0$, we have $\map {\cmod \nu} A = 0$.
From Characterization of Null Sets of Variation of Complex Measure, we have: 

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map \nu B = 0$.
Let $\nu_R$ be the real part of $\nu$. 
Let $\nu_I$ be the imaginary part of $\nu$. 

From the definition of the Jordan decomposition of a complex measure, $\tuple {\nu_1, \nu_2}$ is the Jordan decomposition of $\nu_R$. 
Let $\tuple {P_R, N_R}$ be a Hahn decomposition of $\nu_R$.
Then by the definition of Jordan decomposition and Uniqueness of Jordan Decomposition, we have: 

$\map {\nu_1} A = \map {\nu_R} {A \cap P_R}$
and: 

$\map {\nu_2} A = -\map {\nu_R} {A \cap N_R}$
for each $A \in \Sigma$.
From Intersection is Subset, we have: 

$A \cap P_R \subseteq A$
so:

$\map \nu {A \cap P_R} = 0$
That is: 

$\map {\nu_R} {A \cap P_R} + i \map {\nu_I} {A \cap P_R} = 0$
giving:

$\map {\nu_1} A + i \map {\nu_I} {A \cap P_R} = 0$
Since:

$\map {\nu_1} A$ and $\map {\nu_I} {A \cap P_R}$ are real
we have, comparing real and imaginary parts: 

$\map {\nu_1} A = 0$
We handle $\nu_2$ similarly.
From Intersection is Subset, we have: 

$A \cap N_R \subseteq A$
so:

$\map \nu {A \cap N_R} = 0$
giving:

$\map {\nu_2} A + i \map {\nu_I} {A \cap N_R} = 0$
Since:

$\map {\nu_2} A$ and $\map {\nu_I} {A \cap N_R}$ are real
we have, comparing real and imaginary parts: 

$\map {\nu_2} A = 0$
So: 

if $A \in \Sigma$ has $\map \mu A = 0$ then $\map {\nu_1} A = 0$ and $\map {\nu_2} A = 0$.
It remains to show that $\map {\nu_3} A = 0$ and $\map {\nu_4} A = 0$.

From the definition of the Jordan decomposition of a complex measure, $\tuple {\nu_3, \nu_4}$ is the Jordan decomposition of $\nu_I$.
Let $\tuple {P_I, N_I}$ be a Hahn decomposition of $\nu_I$.
Then by the definition of Jordan decomposition and Uniqueness of Jordan Decomposition, we have: 

$\map {\nu_3} A = \map {\nu_I} {A \cap P_I}$
and: 

$\map {\nu_4} A = -\map {\nu_I} {A \cap N_I}$
From Intersection is Subset, we have: 

$A \cap P_I \subseteq A$
so:

$\map \nu {A \cap P_I} = 0$
giving:

$\map {\nu_R} {A \cap P_I} + i \map {\nu_3} A = 0$
Since:

$\map {\nu_R} {A \cap P_I}$ and $\map {\nu_3} A$ are real
we have, comparing real and imaginary parts: 

$\map {\nu_3} A = 0$
From Intersection is Subset, we have: 

$A \cap N_I \subseteq A$
so:

$\map \nu {A \cap N_I} = 0$
giving:

$\map {\nu_R} {A \cap N_I} + i \map {\nu_4} A = 0$
Since:

$\map {\nu_R} {A \cap N_I}$ and $\map {\nu_4} A$ are real
we have, comparing real and imaginary parts: 

$\map {\nu_4} A = 0$
So: 

if $A \in \Sigma$ has $\map \mu A = 0$ then $\map {\nu_1} A = \map {\nu_2} A = \map {\nu_3} A = \map {\nu_4} A = 0$.
So:

$\nu_1$, $\nu_2$, $\nu_3$ and $\nu_4$ are absolutely continuous with respect to $\mu$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.2$: Absolute Continuity




