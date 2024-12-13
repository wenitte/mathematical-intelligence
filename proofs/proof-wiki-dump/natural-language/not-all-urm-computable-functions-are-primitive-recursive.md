# 

Source: https://proofwiki.org/wiki/Not_All_URM_Computable_Functions_are_Primitive_Recursive

Theorem
There exist URM computable functions which are not primitive recursive.


Proof
Consider the basic primitive recursive functions.
To each basic primitive recursive function $f$ let us assign a code number $\map \delta f$, as follows:

$\map \delta {\operatorname{zero} } = 3$
$\map \delta {\operatorname{succ} } = 9$
$\forall k, m \in \N^*: m \le k: \map \delta {\pr^k_m} = 2^k 3^m$

Suppose the function $h$ is defined by substitution from the functions $f, g_1, g_2, \ldots, g_t$ to which we have already assigned code numbers.
Then we put:

$\map \delta h = 2^{\map \delta f} 3^{\map \delta {g_1} } 5^{\map \delta {g_2} } \cdots  p_{t + 1}^{\map \delta {g_t} } + 1$

Suppose the function $h$ is defined by primitive recursion from the functions $f$ and $g$ to which we have already assigned code numbers.
Then we put:

$\map \delta h = 2^{\map \delta f} 3^{\map \delta g} + 2$

Thus we assign a code number to every definition of a primitive recursive function.

Given any natural number $m$ we can determine whether $m$ is the code number for a definition of a primitive recursive function, and if so, work out what definition it encodes.
In particular, given any such $m$ we can work out whether it encodes a primitive recursive function $f: \N \to \N$, and determine how $f$ is built up from basic primitive recursive functions on up.
From this definition, we can compute all the values of $f$ for all inputs $n \in \N$.

So, we define the function $\Phi: \N^2 \to \N$ as follows:

$\map \Phi {m, n} = \begin{cases}
\map f n & : \text{if } m \text { codes a definition of the primitive recursive function } f: \N \to \N \\
0 & : \text{otherwise}
\end{cases}$
It is deducible by arguments derived from proofs of the various primitive recursive functions that there is a URM program for computing the values of $\Phi$.
That is, $\Phi$ can be shown to be URM computable

Now we apply Cantor's Diagonal Argument to create the following URM computable function $g: \N \to \N$:

$\map g n = \map \Phi {n, n} + 1$
We have that $\Phi$ is URM computable.
So it follows that $\map g n$ is also URM computable.

Now, let $f$ be a primitive recursive function and let $m$ code some definition of $f$.
So, for all $n \in \N$, we have:

$\map f n = \map \Phi {m, n}$
Thus $\map f m = \map \Phi {m, m}$.
Now, since $\map g m = \map \Phi {m, m} + 1$, we see that $\map g m \ne \map f m$, whatever $f$ may happen to be.
Hence $g \ne f$.

So $g$ is different from any primitive recursive function $f$ that we care to devise.
Therefore $g$ is a URM computable function which is not primitive recursive.
Hence the result.
$\blacksquare$





