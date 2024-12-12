# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Countable_Sets_is_Countable/Formal_Proof_1

Theorem
The cartesian product of two countable sets is countable.


Proof
Let $S, T$ be countable sets.
From the definition of countable, there exists a injection from $S$ to $\N$, and similarly one from $T$ to $\N$.
Hence there exists an injection $g$ from $S \times T$ to $\N^2$.
Now let us investigate the cardinality of $\N^2$.
From the Fundamental Theorem of Arithmetic, every natural number greater than $1$ has a unique prime decomposition.
Thus, if a number can be written as $2^n 3^m$, it can be done thus in only one way.
So, consider the function $f: \N^2 \to \N$ defined by:

$\map f {n, m} = 2^n 3^m$.
Now suppose $\exists m, n, r, s \in \N$ such that $\map f {n, m} = \map f {r, s}$.
Then $2^n 3^m = 2^r 3^s$ so that $n = r$ and $m = s$.
Thus $f$ is an injection, whence $\N^2$ is countably infinite.

Now we see that as $g$ and $f$ are injective, it follows from Composite of Injections is Injection that $f \circ g: S \times T \to \N$ is also injective.
Hence the result.
$\blacksquare$





