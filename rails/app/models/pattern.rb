class Pattern < ApplicationRecord
    def steps
        body.lines.map(&:strip).reject(&:empty?)
    end

    def size_names
        sizes.split(",").map(&:strip)
    end

    def current_size
        size_names.first
    end

    def yarn_names
        yarn.split(",").map(&:strip)
    end

    def current_yarn
        yarn_names.first
    end
end
