# 

Source: https://proofwiki.org/wiki/Hahn_Decomposition_Theorem



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$.

Then there exists disjoint sets $P$ and $N$ such that: 

$(1): \quad$ $P$ is a $\mu$-positive set and $N$ is a $\mu$-negative set
$(2): \quad$ $X = P \cup N$
$(3): \quad$ for any other $\mu$-positive set $P'$ and $\mu$-negative set $N'$ with $X = P' \cup N'$, the symmetric differences $P \Delta P'$ and $N \Delta N'$ are $\mu$-null.


Proof
Note that $\mu$ can attain at most one of $+\infty$ and $-\infty$.
Suppose first that $\mu$ does not attain the value $-\infty$.

Set: 

$s_1 = \inf \set {\map \mu D : D \in \Sigma \text { and } D \subseteq X}$
Since $\O \subseteq X$ and $\map \mu \O = 0$ we have:

$0 \in \set {\map \mu D : D \in \Sigma \text { and } D \subseteq X}$
From the definition of infimum, we have $s_1 \le 0$. 
Applying the definition of infimum again, we can pick a $D_1 \in \Sigma$ such that: 

$\ds \map \mu {D_1} \le \max \set {\frac {s_1} 2, -1} \le 0$
From Measurable Set with Negative Measure has Negative Subset, there exists a $\mu$-negative set $N_1 \subseteq D_1$ such that: 

$\map \mu {N_1} \le \map \mu {D_1}$
We now define the sequences $\sequence {s_n}_{n \in \N}$ and $\sequence {N_n}_{n \in \N}$ recursively.
We ensure that the sequence $\sequence {N_n}$ is a pairwise disjoint family of sets. 
For $n > 1$ set: 

$\ds s_n = \inf \set {\map \mu D : D \in \Sigma \text { and } D \subseteq X \setminus \paren {\bigcup_{i = 1}^{n - 1} N_i} }$
Again we have:

$\ds \O \subseteq X \setminus \paren {\bigcup_{i = 1}^{n - 1} N_i}$
Since $\map \mu \O = 0$, we have:

$\ds 0 \in \set {\map \mu D : D \in \Sigma \text { and } D \subseteq X \setminus \paren {\bigcup_{i = 1}^{n - 1} N_i} }$
and so from the definition of infimum we have $s_n \le 0$. 
Applying the definition of infimum again, we can pick a $\Sigma$-measurable set: 

$\ds D_n \subseteq X \setminus \paren {\bigcup_{i = 1}^{n - 1} N_i}$
such that: 

$\ds \map \mu {D_n} \le \max \set {\frac {s_n} 2, -1} \le 0$
From Measurable Set with Negative Measure has Negative Subset, there exists a $\mu$-negative set $N_n \subseteq D_n$ such that: 

$\map \mu {N_n} \le \map \mu {D_n}$
Since:

$\ds N_n \not \in \bigcup_{i \mathop = 1}^{n - 1} N_i$
we have that $N_n$ is disjoint to each of $N_1, N_2, \ldots, N_{n - 1}$. 
So the thus constructed $\sequence {N_n}$ is a pairwise disjoint family of sets.

We now prove $(1)$ and $(2)$.
Set: 

$\ds N = \bigcup_{i \mathop = 1}^\infty N_i$
We show that $N$ is $\mu$-negative.
We have, for every $B \subseteq N$ that: 














\(\ds \map \mu B\)

\(=\)







\(\ds \map \mu {B \cap N}\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{i \mathop = 1}^\infty \paren {B \cap N_i} }\)





Intersection Distributes over Union of Family














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty \map \mu {B \cap N_i}\)





$\mu$ is countably additive



Since $N_i$ is $\mu$-negative, and: 

$B \cap N_i \subseteq N_i$
we have: 

$\map \mu {B \cap N_i} \le 0$
so, from countable additivity:

$\ds \map \mu B = \sum_{i \mathop = 1}^\infty \map \mu {B \cap N_i} \le 0$
Since $B$ was an arbitrary $\Sigma$-measurable subset of $N$, we have that: 

$N$ is $\mu$-negative.
Now set: 

$P = X \setminus N$
Clearly:

$X = P \cup N$
It remains to show that $P$ is $\mu$-positive.
Aiming for a contradiction, suppose suppose that $A \subseteq P$ has $\map \mu A < 0$.
Note that since $P = X \setminus N$, we have: 

$\ds A \subseteq P = X \setminus \paren {\bigcup_{i = 1}^{n - 1} N_i}$
for each $n$.
So:

$s_n \le \map \mu A < 0$
If $\sequence {s_n}_{n \in \N}$ converges, then: 

$\ds \lim_{n \mathop \to \infty} s_n \le \map \mu A < 0$
from Lower and Upper Bounds for Sequences.
In particular, we cannot have $s_n \to 0$. 
We have: 














\(\ds \map \mu N\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \mu {N_n}\)





$\mu$ is countably additive














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \map \mu {D_n}\)





since $\map \mu {N_n} \le \map \mu {D_n}$ for each $i$














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \max \set {\frac {s_n} 2, -1}\)









Aiming for a contradiction, suppose, suppose that: 

$\ds \sum_{n \mathop = 1}^\infty \max \set {\frac {s_n} 2, -1}$ converges.
Then from Terms in Convergent Series Converge to Zero, we have:

$\ds \max \set {\frac {s_n} 2, -1} \to 0$
In particular, there exists $N$ such that: 

$\ds \size {\max \set {\frac {s_n} 2, -1} } < 1$
for $n > N$. 
That is: 

$\ds \max \set {\frac {s_n} 2, -1} = \frac {s_n} 2$
for $n > N$. 
So if: 

$\ds \max \set {\frac {s_n} 2, -1} \to 0$
we have: 

$\dfrac {s_n} 2 \to 0$
That is, from Multiple Rule for Real Sequences:

$s_n \to 0$
We have established that this is impossible, so we have reached a contradiction, and:

$\ds \sum_{n \mathop = 1}^\infty \max \set {\frac {s_n} 2, -1}$ does not converge.
Since:

$\ds \max \set {\frac {s_n} 2, -1} \le 0$
for each $n$, we have:

$\ds \sum_{n \mathop = 1}^\infty \max \set {\frac {s_n} 2, -1} = -\infty$
So:

$\map \mu N \le -\infty$
that is: 

$\map \mu N = -\infty$
But $\mu$ does not take the value $-\infty$, so we have a contradiction. 
So $P$ is $\mu$-positive.

We now prove $(3)$. 
We have that: 














\(\ds P \Delta P'\)

\(=\)







\(\ds \paren {P \setminus P'} \cup \paren {P' \setminus P}\)





Definition of Symmetric Difference














\(\ds \)

\(=\)







\(\ds \paren {P \cap \paren {X \setminus P'} } \cup \paren {P' \cap \paren {X \setminus P} }\)





Definition of Set Difference














\(\ds \)

\(=\)







\(\ds \paren {P \cap N'} \cup \paren {P' \cap N}\)





since $X \setminus P' = N$ and $X \setminus P = N$



and:














\(\ds N \Delta N'\)

\(=\)







\(\ds \paren {N \setminus N'} \cup \paren {N' \setminus N}\)





Definition of Symmetric Difference














\(\ds \)

\(=\)







\(\ds \paren {N \cap \paren {X \setminus N'} } \cup \paren {N' \cap \paren {X \setminus N} }\)





Definition of Set Difference














\(\ds \)

\(=\)







\(\ds \paren {N \cap P'} \cup \paren {N' \cap P}\)





since $X \setminus N' = P'$ and $X \setminus N = P$














\(\ds \)

\(=\)







\(\ds P \Delta P'\)









From Intersection of Positive Set and Negative Set is Null Set, we have: 

$N \cap P'$ is a $\mu$-null set
and:

$N' \cap P$ is a $\mu$-null set.
From Null Sets Closed under Countable Union: Signed Measure, we then have: 

$P \Delta P' = N \Delta N'$ is $\mu$-null
proving $(3)$.

Now suppose that $\mu$ does not attain the value $+\infty$. 
Then the signed measure $\nu = -\mu$ does not attain the value $-\infty$.
So, we can find disjoint sets $P$ and $N$ such that: 

$(1'): \quad$ $P$ is a $\nu$-positive set and $N$ is a $\nu$-negative set
$(2'): \quad$ $X = P \cup N$
$(3'): \quad$ for any other $\nu$-positive set $P'$ and $\nu$-negative set $N'$ with $X = P' \cup N'$, the symmetric differences $P \Delta P'$ and $N \Delta N'$ are $\nu$-null.
We show that this yields an appropriate decomposition for $\mu$. 
We first show that a set $A \in \Sigma$ is $\nu$-positive if and only if it is $\mu$-negative, and $\nu$-negative if and only if it is $\mu$-positive.
Note that a set $A \in \Sigma$ is $\nu$-positive if and only if for all $B \in \Sigma$ with $B \subseteq A$ we have: 

$\ds \map \nu B = \map {-\mu} B \ge 0$
This is equivalent to: 

$\map \mu B \le 0$
So $A$ is $\nu$-positive if and only if it is $\mu$-negative.
Now note that a set $A \in \Sigma$ is $\nu$-negative if and only if for all $B \in \Sigma$ with $B \subseteq A$ we have: 

$\ds \map \nu B = \map {-\mu} B \le 0$
This is equivalent to: 

$\map \mu B \ge 0$
So $A$ is $\nu$-negative if and only if it is $\mu$-positive.
Note that if a set $A \in \Sigma$ is $\nu$-null, we have that: 

$-\map \mu A = 0$
so:

$\map \mu A = 0$
That is, $P$ is $\mu$-negative and $N$ is $\mu$-positive.
At this point it is convenient to relabel $\PP = N$ and $\NN = N$. 
$(2')$ requires no adaption, so we move to $(3')$. 
We show that $A \in \Sigma$ is $\nu$-null if and only if it is $\mu$-null. 
Note that $A \in \Sigma$ is $\nu$-null if and only if for all $B \in \Sigma$ with $B \subseteq A$, we have: 

$\map \nu B = 0$
This is equivalent to:

$\map {-\mu} B = 0$
that is: 

$\map \mu B = 0$
So $A \in \Sigma$ is $\nu$-null if and only if it is $\mu$-null.
Relabelling $\PP' = N'$ and $\NN' = P'$, we find that $(3')$ is equivalent to:

for any other $\mu$-negative set $\NN'$ and $\mu$-positive set $\PP'$ with $X = \NN' \cup \PP'$, the symmetric differences $\PP \Delta \PP'$ and $\NN \Delta \NN'$ are $\mu$-null.
So we have:

$(1): \quad$ $\PP$ is a $\mu$-positive set and $\NN$ is a $\mu$-negative set
$(2): \quad$ $X = \PP \cup \NN$
$(3): \quad$ for any other $\mu$-positive set $\PP'$ and $\mu$-negative set $\NN'$ with $X = \PP' \cup \NN'$, the symmetric differences $\PP \Delta \PP'$ and $\NN \Delta \NN'$ are $\mu$-null.
in the case that $\mu$ does not take the value $+\infty$. 
We therefore have the demand in both cases.
$\blacksquare$


Source of Name
This entry was named for Hans Hahn.


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.1$: Signed and Complex Measures




