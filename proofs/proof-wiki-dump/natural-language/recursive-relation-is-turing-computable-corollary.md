# 

Source: https://proofwiki.org/wiki/Recursive_Relation_is_Turing_Computable/Corollary

Theorem
Let $f: S \to \set {0, 1}$, where $S \subseteq \N$ be a recursive function.
Let $x \in \N$ be encoded as:

$1 1 \dotsm 1$
where $1$ is repeated $x$ times.
Then there exists a Turing machine such that:

The input symbols of the machine are $\set 1$
The accepted language are the encodings of $x \in \N$ such that $\map f x = 1$
The machine halts on an input if and only if it is the encoding for some $x \in \N$ such that $\map f x$ is defined


Proof
By Recursive Relation is Turing Computable, there is a Turing machine $T$ that satisfies the conditions.
The result follows from an identical machine, except that the input symbols are restricted to be only $\set 1$.
$\blacksquare$





