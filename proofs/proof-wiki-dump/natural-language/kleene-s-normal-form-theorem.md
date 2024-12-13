# 

Source: https://proofwiki.org/wiki/Kleene%27s_Normal_Form_Theorem

  This article was Featured Proof between 13 December 2009 and 20 December 2009.




Theorem
For each integer $k \ge 1$, there exists:

a primitive recursive $k + 1$-ary relation $T_k$
a primitive recursive function $U: \N \to \N$
such that a partial function $f: \N^k \to \N$ is recursive if and only if, for some $e \in \N$ and all $\tuple {n_1, n_2, \ldots, n_k} \in \N^k$:

$\map f {n_1, n_2, \ldots, n_k} \approx \map U {\mu z \ \map {T_k} {e, n_1, n_2, \ldots, n_k, z} }$


Proof
See the proof of URM Computable Function is Recursive for an explanation of the symbols used here.


Necessary Condition
Suppose $e = \map \gamma P$ codes a URM program $P$ which computes $f$.
Suppose the computation using $P$ with input $\tuple {n_1, n_2, \ldots, n_k}$ halts at stage $t_0$ with output $q$.
Let $t > t_0$, that is, we "wait till after $P$ has finished".
Then $\map f {n_1, n_2, \ldots, n_k} = q$.
Since $P$ has halted at stage $t_0$:

$\paren {\map {S_k} {e, n_1, n_2, \ldots, n_k, t} }_1 > \map \len e$
where:

$\map {S_k} {e, n_1, n_2, \ldots, n_k, t}$ is the state code at stage $t$ of the computation of $P$ with input $\tuple {n_1, n_2, \ldots, n_k}$
$ \map \len e$ is the length of $e$
the number $\paren {\map {S_k} {e, n_1, n_2, \ldots, n_k, t} }_1$ is the value of the instruction pointer to the instruction about to be carried out at stage $t$
$\tuple z_j$ is the prime exponent function.

Since the output is $q$:

$\paren {\map {S_k} {e, n_1, n_2, \ldots, n_k, t} }_2 = q$
Let us put $z_0 = 2^q 3^{t_0}$.
Then:

$\tuple {z_0}_2 = t_0$ and $\tuple {z_0}_1 = q$
Thus:

$\paren {\map {S_k} {e, n_1, n_2, \ldots, n_k, \tuple {z_0}_2} }_1 > \map \len e$
and

$\tuple {z_0}_1 = \paren {\map {S_k} {e, n_1, n_2, \ldots, n_k, \tuple z_2} }_2$
Now $z_0$ is the smallest integer with these properties, because $\tuple {z_0}_2 = t_0$ is the stage at which $P$ halts.
Thus we have:

$\map f {n_1, n_2, \ldots, n_k} = q = \tuple {z_0}_1$

Now we let $\map {T_k} {e, n_1, n_2, \ldots, n_k, z}$ be the relation defined as:














\(\ds \map {T_k} {e, n_1, n_2, \ldots, n_k, z}\)

\(\iff\)







\(\ds \tuple {\map {S_k} {e, n_1, n_2, \ldots, n_k, t} }_1 > \map \len e\)




















\(\ds \)

\(\text { and }\)







\(\ds \tuple z_1 = \paren {\map {S_k} {e, n_1, n_2, \ldots, n_k, \tuple z_2} }_2\)









Then $T_k$ is a primitive recursive $k + 1$-ary relation.
Also, we can take $U: \N \to \N$ to be the primitive recursive function given by $\map U z = \tuple z_1$.
$\Box$


Sufficient Condition
Now let $f$ be a recursive function.
Then by Recursive Function is URM Computable, there exists some URM program which computes $f$.
Let $P$ be the URM program with the smallest code number that computes $f$.
Let $e = \map \gamma P$ be the code number of $P$.

Suppose $\map f {n_1, n_2, \ldots, n_k}$ is defined.
Then from the above, we deduce that $\mu z \ \map {T_k} {e, n_1, n_2, \ldots, n_k, z}$ is defined.
Let $z_0 = \mu z \ \map {T_k} {e, n_1, n_2, \ldots, n_k, z}$.
Then:

$\tuple {z_0}_1 = \map f {n_1, n_2, \ldots, n_k}$
That is:

$\map U {z_0} = \map f {n_1, n_2, \ldots, n_k}$
Hence:

$\map f {n_1, n_2, \ldots, n_k} = \map U {\mu z \ \map {T_k} {e, n_1, n_2, \ldots, n_k, z} }$
as required.

On the other hand, suppose $\map f {n_1, n_2, \ldots, n_k}$ is undefined.
Then the computation using $P$ with input $\tuple {n_1, n_2, \ldots, n_k}$ does not halt.
So there is no $z$ such that $\map {T_k} {e, n_1, n_2, \ldots, n_k, z}$.
So $\map U {\mu z \ \map {T_k} {e, n_1, n_2, \ldots, n_k, z} }$ is undefined.
Thus:

$\map f {n_1, n_2, \ldots, n_k} \approx \map U {\mu z \ \map {T_k} {e, n_1, n_2, \ldots, n_k, z} }$
as defined in partial function equality.
$\blacksquare$


Source of Name
This entry was named for Stephen Cole Kleene.





