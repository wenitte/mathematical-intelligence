# 

Source: https://proofwiki.org/wiki/Countable_Set_equals_Range_of_Sequence



Theorem
Let $S$ be a set.

Then $S$ is countable if and only if there exists a sequence $\sequence {s_i}_{i \mathop \in N}$ where $N$ is a subset of $\N$ such that $S$ equals the range of $\sequence {s_i}_{i \mathop \in N}$.


Proof
Necessary Condition
Assume that $S$ is countable.
We need to prove that there exists a sequence $\sequence {s_i}_{i \mathop \in N}$, $N \subseteq \N$, such that $S$ equals the range of $\sequence {s_i}_{i \mathop \in N}$.
The range of $\sequence {s_i}_{i \mathop \in N}$ is defined as $\set {s_i: i \in N}$.


Case 1. $S$ is empty.

Empty Set is Countable confirms that $S$ is countable.
Define the empty sequence as $\sequence {s_i}_{i \mathop \in \O}$.
The range of the empty sequence is $\set {s_i: i \in \O} = \O$.
$S$ equals the range of the empty sequence as $S$ equals $\O$.
This finishes the argument for this case.


Case $2$. $S$ is finite and not empty.

Let $n \in \N_{>0}$ be the number of elements of $S$.
Define a sequence $\sequence {s_i}_{1 \mathop \le \mathop i \mathop \le \mathop n}$ by going through every element of S:

Let $s_1$ be any element of $S$.
Let $s_2$ be any element of $S \setminus \set {s_1}$.
...
Let $s_n$ be the single element of $S \setminus \set {s_i: 1 \le i \le n - 1}$.
From this definition follows that every element of $S$ equals some $s_i$, $1 \le i \le n$.
So, $S \subseteq \set {s_i: 1 \le i \le n}$.
Every number $s_i$, $1 \le i \le n$, equals some element of $S$.
So, $\set {s_i: 1 \le i \le n} \subseteq S$.
Accordingly, $S = \set {s_i: 1 \le i \le n}$.
By the definition of range, $\set {s_i: 1 \le i \le n}$ equals the range of the sequence $\sequence {s_i}_{1 \mathop \le \mathop i \mathop \le \mathop n}$.
Therefore, $S$ equals the range of $\sequence {s_i}_{1 \mathop \le \mathop i \mathop \le \mathop n}$.
This finishes the proof for case 2.


Case $3$. $S$ is infinite.

Since $S$ is countable and infinite, $S$ is countably infinite.
By the definition of countably infinite, $S$ can be written:

$\set {t_0, t_1, \ldots, t_n, \ldots}$
where $n$ runs over all the natural numbers, $\N$.
In other words, we have:

$S = \set {t_i: i \in \N}$

We intend to produce a sequence from $S$.
We start with the empty sequence.
Using $\N$, the set to which $S$ is equivalent, we put all the elements of $S$ one by one into the sequence.
The result is $\sequence {t_i}_{i \mathop \in \N}$.
The range of $\sequence {t_i}_{i \mathop \in \N}$ is $\set {t_i: i \in \N}$, which equals $S$.
In other words, $S$ is the range of the sequence $\sequence {t_i}_{i \mathop \in \N}$.
This finishes the necessary part of the proof.
$\blacksquare$


Sufficient Condition
Assume that there exists a sequence $\sequence {s_i}_{i \mathop \in N}$ where $N$ is a subset of $\N$ such that $S$ equals the range of that sequence.
We need to prove that $S$ is countable.


Case 1. $S$ is finite.

By the definition of countable $S$ is countable.


Case 2. $S$ is infinite.

We know that $S$ equals the range of the sequence $\sequence {s_i}_{i \mathop \in N}$ where $N$ is an infinite subset of $\N$.
The range of $\sequence {s_i}_{i \mathop \in N}$ is defined as $\set {s_i: i \in N}$, so we have

$S = \set {s_i: i \in N}$

We need to prove that $S$ is countably infinite.
That a set is countably infinite, means that it is of the form:

$\set {t_0, t_1, \ldots, t_n, \ldots}$
where $n$ runs over all the natural numbers, $\N$.
Accordingly, we need to show that a set $\set {t_i: i \in \N}$ exists such that:

$S = \set {t_i: i \in \N}$

Assume that $N = \N$.
Then $S$ is countably infinite by definition.

The only other alternative is $N \subset \N$.
Define:

$t_i = s_i$ for every $i$ in $N$
$t_i = s_1$ for every $i$ in $\N \setminus N$
Thus, $t_i$ is defined for every $i$ in $\N$.
We have:














\(\ds \set {t_i: i \in \N}\)

\(=\)







\(\ds \set {t_i: i \in N} \cup \set {t_i: i \in \N \setminus N}\)





as $\N = N \cup \paren {\N \setminus N}$














\(\ds \)

\(=\)







\(\ds \set {s_i: i \in N} \cup \set {t_i: i \in \N \setminus N}\)





as $s_i = t_i$ for every $i$ in $N$














\(\ds \)

\(=\)







\(\ds S \cup \set {t_i: i \in \N \setminus N}\)





by the definition of $S$














\(\ds \)

\(=\)







\(\ds S \cup \set {s_1}\)





as $t_i = s_1$ for every $i$ in $\N \setminus N$














\(\ds \)

\(=\)







\(\ds S\)





as $\set {s_1} \subset S$ as $s_1 \in S$



All in all, $S = \set {t_i: i \in \N}$.
Therefore, $S$ is countably infinite and thus countable.
This finishes the last part of the proof.
$\blacksquare$
 

Sources
1988: H.L. Royden: Real Analysis (3rd ed.): Ch. $1$: Section $6$, Definition




