# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens_for_Semantic_Consequence_in_Predicate_Logic


It has been suggested that this page or section be merged into Modus Ponendo Ponens.In particular: But I couldn't think of how to structure itTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\mathrm{PL}$ be the formal semantics of structures for predicate logic.
Denote with $\models_{\mathrm{PL}}$ $\mathrm{PL}$-semantic consequence.
Let $\mathbf A$ and $\mathbf B$ be sentences.
Let $\FF$ be a set of sentences.

Suppose that:

$\FF \models_{\mathrm{PL}} \mathbf A$
$\FF \models_{\mathrm{PL}} \mathbf A \implies \mathbf B$
Then:

$\FF \models_{\mathrm{PL}} \mathbf B$
establishing Modus Ponendo Ponens in $\mathrm{PL}$.


Proof
To establish $\FF \models_{\mathrm{PL}} \mathbf B$, we need to show that for all structures $\AA$:

$\AA \models_{\mathrm{PL}} \FF$ implies $\AA \models_{\mathrm{PL}} \mathbf B$
where $\models_{\mathrm{PL}}$ denotes the models relation.

Then since $\AA \models_{\mathrm{PL}} \FF$, it follows that:

$\AA \models_{\mathrm{PL}} \mathbf A$
$\AA \models_{\mathrm{PL}} \mathbf A \implies \mathbf B$
By definition then, the latter means:

$\map {f^\to} { \map {\operatorname{val}_\AA} {\mathbf A}, \map {\operatorname{val}_\AA} {\mathbf B} } = T$
where $f^\to$ is the truth function of $\implies$ and $\map {\operatorname{val}_\AA} {\mathbf A}$ is the value of $\mathbf A$ in $\AA$.
Since $\map {\operatorname{val}_\AA} {\mathbf A} = T$, it then follows from the definition of $f^\to$ that necessarily:

$\map {\operatorname{val}_\AA} {\mathbf B} = T$
which is to say:

$\AA \models_{\mathrm{PL}} \mathbf B$
Since $\AA$ was arbitrary such that $\AA \models_{\mathrm{PL}} \FF$, it follows that:

$\FF \models_{\mathrm{PL}} \mathbf B$
$\blacksquare$





