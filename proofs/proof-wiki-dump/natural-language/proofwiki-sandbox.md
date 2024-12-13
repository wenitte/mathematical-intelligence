# 

Source: https://proofwiki.org/wiki/ProofWiki:Sandbox




Welcome to the Sandbox! Play safe and have fun!
Use Proofwiki:Sandbox/Template for experimental template
Warning: The sandbox is not permanent. EXPECT ANYTHING YOU PUT HERE TO BE DELETED!



 


Proof 3
Define $C = \{f^k(x) | k \in \N, x \in S \setminus T \}$.
Clearly,  $C = C_0 | C_1$, where:
$C_0 = S \setminus T$, the difference between $S$ and $T$, 
$C_1 = \{f^k(x) | k \in \N_{> 0}, x \in S \setminus T \}$.
Note, that $S \setminus C_0 = T$.
Obviously, $im(f|C) = C_1$.
Define a mapping $h: S \to S$ as follows:
$\map h x = \begin {cases} \map f x & : x \in C \\ x & : x \notin C \end {cases}$
Clearly, $h = f|C \cup id(S \setminus C)$, where $id(S \setminus C)$ is the identity function on the set $S \setminus C$.
Note, that $dom(h) = S$;
$im(h) = im(f|C) \cup im(id(S \setminus C) =$
$C_1 \cup S \setminus C =$
$C_1 \cup S \setminus (C_0 \cup C) =$
$S \setminus C_0 =$ 
$T$.
Also, $h$ is an injection because $h$ is the union of the injections $f|C$ and $id(S \setminus C)$ and $dom(f|C) \cap dom(id(S \setminus C)) = \{\}$
and $im(f|C) \cap im(id(S \setminus C) = C_1 \cap (S \setminus C) = \{\}$ because $C_1 \subseteq C$.
Now $h$ is a bijection $S \to T$  because $dom(h) = S, im(h) = T$ and $h$ is an injection.


Abel's Limit Theorem/Proof 2
(The text in italics below are my comments.)
As far as I can tell, the outline of the proof should be:

Invoke Abel's Test for Uniform Convergence to obtain that $\ds \sum a_k x^k$ is uniformly convergent on $[0,1]$. To do this, we need to show that:
$\sequence{a_k}$ is bounded in $[0,1]$
$\ds \sum \size{a_k-a_{k+1}}$ is convergent and bounded in $[0,1]$
$\ds \sum x^k$ is uniformly convergent on $[0,1]$
Invoke Uniform Limit Theorem to obtain that the mapping $x \mapsto \ds \sum_{k \mathop = 0}^\infty a_k x^k$ is continuous on $[0,1]$
Conclude that $\ds \lim_{x \to 1^-} \sum_{k \mathop 0}^\infty a_k x^k = \sum_{k \mathop 0}^\infty a_k$
The trouble I am having is that I was unable to show that we can in fact invoke Abel's Test for Uniform Convergence.  Specifically, $\ds \sum x^k$ needs to be uniformly convergent on $[0,1]$, but I am stuck at Power Series Converges Uniformly within Radius of Convergence and Radius of Convergence of Power Series in Complex Plane where the latter gives us a radius of convergence of 1 and the former shows that $\ds \sum_{k \mathop = 0}^\infty x^k$ is uniformly convergent on $\set{x: \size{x} \le \rho}$ where $\rho$ is explicitly less than the radius of convergence.
The current proof, as I have written, is below.  Feel free to change it as needed.

Let $\sequence{a_k}$ be a sequence in $R$.
Let $\ds \sum a_k$ be convergent.

From Terms in Convergent Series Converge to Zero:

$\sequence{a_k} \to 0$
Hence, from Convergent Real Sequence is Bounded:

$\sequence{a_k}$ is bounded

Writing this now, I have also noticed that I can't immediately think of a way to show that $\ds \sum \size{a_k-a_{k+1}}$ is convergent and bounded from $\ds \sum a_k$ being convergent.  I'll take a look at it when I have the time but if anyone knows the proof then please feel free to fill it in.

Below, it would be better if we had something like Radius of Convergence of Real Power Series instead.
From Radius of Convergence of Power Series in Complex Plane:

the radius of convergence of $\ds \sum_{k \mathop = 0}^\infty x^k$ is 1
Below is what needs to be fixed.
Let $\rho \in \R$ such that $0 \le \rho < 1$.
From Power Series Converges Uniformly within Radius of Convergence:

$\ds \sum x^k$ is uniformly convergent on $\set{x: \size{x} \le \rho}$
And then the argument below would be on $[0,1]$.
Then from Abel's Test for Uniform Convergence:

$\ds \sum a_k x^k$ is uniformly convergent on $\set{x: \size{x} \le \rho}$

Assuming we've justified invoking Abel's Test for Uniform Convergence on $[0,1]$:
Let $\sequence{f_n}$ be the sequence of mappings from $[0,1]$ defined as:

$f_n: x \mapsto \ds \sum_{k \mathop = 0}^n a_k x^k$
From Real Polynomial Function is Continuous:

$f_n$ is continuous
If we split the first part into its own thing, we would need to invoke it here.
Hence, from Uniform Limit Theorem:

$x \mapsto \ds \sum_{k \mathop = 0}^\infty a_k x^k$ is continuous
So:

$\ds \lim_{x \to 1^-} \paren{\ds \sum_{k \mathop = 0}^\infty a_k x^k} = \sum_{k \mathop = 0}^\infty a_k$
$\blacksquare$
Note that every part of the proof needs to be double-checked, since I have very little confidence in myself.
--Thuna (talk) 21:35, 29 March 2024 (UTC)





