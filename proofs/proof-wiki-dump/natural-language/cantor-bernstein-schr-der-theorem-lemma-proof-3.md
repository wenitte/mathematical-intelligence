# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Lemma/Proof_3

Theorem
Let $S$ be a set.
Let $T \subseteq S$.
Suppose that $f: S \to T$ is an injection.

Then there is a bijection $g: S \to T$.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Define $C = \{f^k(x) | k \in \N, x \in S \setminus T \}$.
Clearly, $C = C_0 \cup C_1$, where:
$C_0 = S \setminus T$, the difference between $S$ and $T$, 
$C_1 = \{f^k(x) | k \in \N_{> 0}, x \in S \setminus T \}$.
Note, that $S \setminus C_0 = S \setminus (S \setminus T) = S \cap T = T$ (use this theorem and $T \subseteq S$).
Obviously, $im(f|C) = C_1$.
Define a mapping $h: S \to S$ as follows:
$\map h x = \begin {cases} \map f x & : x \in C \\ x & : x \notin C \end {cases}$
Clearly, $h = f|C \cup I_{S \setminus C}$, where $I_{S \setminus C}$ is the  identity mapping on the set $S \setminus C$.
Note, that $dom(h) = S$;
$im(h) = im(f|C) \cup im(I_{S \setminus C}) =$
$C_1 \cup (S \setminus C) =$
$C_1 \cup (S \setminus (C_0 \cup C_1)) =$
$S \setminus C_0 =$
$T$.
Also, $h$ is an injection because $h$ is the union of the injections $f|C$ (Restriction of Injection is Injection) and $I_{S \setminus C}$,
and also $dom(f|C) \cap dom(I_{S \setminus C}) = \{\}$
and $im(f|C) \cap im(I_{S \setminus C}) = C_1 \cap (S \setminus C) = \{\}$ because $C_1 \subseteq C$.
Now $h$ is a bijection $S \to T$ because $dom(h) = S, im(h) = T$ and $h$ is an injection.
$\blacksquare$





